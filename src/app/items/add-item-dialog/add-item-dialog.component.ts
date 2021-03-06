import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ItemRequest } from '../../shared/models/item-request.model';
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

  constructor(readonly dialogRef: MatDialogRef<AddItemDialogComponent>) {}

  save() {
    console.log('add new item ', this.newItem);
    this.dialogRef.close({
      ...this.newItem,
      id: Math.floor(Math.random() * 10000),
    } as Item);
  }
}
