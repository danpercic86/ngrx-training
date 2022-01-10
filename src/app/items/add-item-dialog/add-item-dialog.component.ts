import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ItemRequest } from '../../shared/models/item-request.model';

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

  constructor(readonly dialogRef: MatDialogRef<AddItemDialogComponent>) {
  }

  save() {
    console.log('add new item ', this.newItem);
    this.dialogRef.close();
  }
}
