import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsComponent {
  items$ = of([]);

  constructor(private readonly dialog: MatDialog) {
  }

  addItem() {
    this.dialog.open(AddItemDialogComponent, {
      width: '500px',
    });
  }

  removeItem(id: number) {
    console.log('removing item with id ', id);
  }

  filter(withDescription: boolean) {
    console.log('filter only with description');
  }
}
