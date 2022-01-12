import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
import { ApiService } from '../shared/services/api.service';
import { EditItemDialogComponent } from './edit-item-dialog/edit-item-dialog.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsComponent {
  readonly items$ = this.apiService.getItems();

  constructor(
    private readonly dialog: MatDialog,
    private readonly apiService: ApiService,
  ) {}

  async loadItems() {
    const items = await firstValueFrom(this.apiService.getItems());
  }

  resetItems() {}

  addItem() {
    this.dialog.open(AddItemDialogComponent, {
      width: '500px',
    });
  }

  removeItem(id: number) {
    console.log('removing item with id ', id);
  }

  editItem(id: number) {
    this.dialog.open(EditItemDialogComponent, {
      width: '500px',
      data: id,
    });
  }

  filter(withDescription: boolean) {
    console.log('filter only with description', withDescription);
  }

  toggleSelect(itemId: number) {
    console.log('toggle select ', itemId);
  }

  resetSelected() {
    console.log('reset selected');
  }
}
