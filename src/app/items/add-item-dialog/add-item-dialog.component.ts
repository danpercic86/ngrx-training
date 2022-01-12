import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ItemRequest } from '../../shared/models/item-request.model';
import { AppState } from '../../state/reducers';
import { addItemAction } from '../../state/actions';
import { Item } from '../../shared/models/item.model';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemDialogComponent {
  newItem: ItemRequest = {
    title: '',
    description: '',
  };

  constructor(
    readonly dialogRef: MatDialogRef<AddItemDialogComponent>,
    readonly store: Store<AppState>,
  ) {}

  save() {
    console.log('add new item ', this.newItem);
    const item: Item = {
      ...this.newItem,
      id: Math.floor(Math.random() * 100000),
    };
    this.store.dispatch(addItemAction({ item }));
    this.dialogRef.close();
  }
}
