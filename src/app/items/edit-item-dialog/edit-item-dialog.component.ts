import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ItemRequest } from '../../shared/models/item-request.model';
import { ApiService } from '../../shared/services/api.service';
import { Item } from '../../shared/models/item.model';

@Component({
  selector: 'app-edit-item-dialog',
  templateUrl: './edit-item-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditItemDialogComponent {
  readonly item$: Observable<ItemRequest> = this.apiService.getItems().pipe(
    map<Item[], Item>(items => items.find(item => item.id === this.id) as Item),
    map(
      (item: Item) => ({
        title: item.title,
        description: item.description,
      } as ItemRequest),
    ),
  );

  constructor(
    readonly dialogRef: MatDialogRef<EditItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly id: number,
    private readonly apiService: ApiService,
  ) {}

  save(item: ItemRequest) {
    console.log('edit item ', item);
    this.dialogRef.close();
  }
}
