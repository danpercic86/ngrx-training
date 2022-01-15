import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { ItemRequest } from '../../shared/models/item-request.model';
import { ApiService } from '../../shared/services/api.service';
import { Item } from '../../shared/models/item.model';
import { editItem } from '../../state/actions';
import { AppState } from '../../state';

@Component({
  selector: 'app-edit-item-dialog',
  templateUrl: './edit-item-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditItemDialogComponent {
  readonly item$: Observable<ItemRequest> = this.store
    .select(state => state.items.entities)
    .pipe(
      map<Dictionary<Item>, Item>(items => items[this.id] as Item),
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
    private readonly store: Store<AppState>,
  ) {}

  save(item: ItemRequest) {
    console.log('edit item ', item);
    this.store.dispatch(editItem({ item: { id: this.id, changes: item } }));
    this.dialogRef.close();
  }
}
