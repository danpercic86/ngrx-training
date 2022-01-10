import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ItemRequest } from '../../shared/models/item-request.model';
import { ApiService } from '../../shared/services/api.service';
import { ifFalsyThen } from '../../shared/utils/operators';

@Component({
  selector: 'app-edit-item-dialog',
  templateUrl: './edit-item-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditItemDialogComponent {
  readonly item$: Observable<ItemRequest> = this.apiService.getItems().pipe(
    map(items => items.find(item => item.id === this.id)),
    ifFalsyThen(() => this.router.navigate(['items']).then()),
    map(
      item => ({
        title: item.title,
        description: item.description,
      } as ItemRequest),
    ),
  );

  constructor(
    readonly dialogRef: MatDialogRef<EditItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly id: number,
    private readonly apiService: ApiService,
    private readonly router: Router,
  ) {}

  save(item: ItemRequest) {
    console.log('edit item ', item);
    this.dialogRef.close();
  }
}
