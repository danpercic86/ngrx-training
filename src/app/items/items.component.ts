import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
import { ApiService } from '../shared/services/api.service';
import { EditItemDialogComponent } from './edit-item-dialog/edit-item-dialog.component';
import { AppState } from '../state';
import { selectDisplayed } from '../state/selectors';
import {
  loadItems,
  removeItem,
  toggleCheckItem,
  toggleWithDescription,
} from '../state/actions';
import { DisplayedItem } from '../shared/models/item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsComponent {
  readonly items$: Observable<DisplayedItem[]> = this.store.select(selectDisplayed);

  readonly loading$ = this.store.select('loading');

  constructor(
    private readonly dialog: MatDialog,
    private readonly apiService: ApiService,
    private readonly store: Store<AppState>,
  ) {}

  loadItems() {
    this.store.dispatch(loadItems());
    // const items = await firstValueFrom(this.apiService.getItems());
  }

  resetItems() {}

  addItem() {
    this.dialog.open(AddItemDialogComponent, {
      width: '500px',
    });
  }

  removeItem(id: number) {
    console.log('removing item with id ', id);
    this.store.dispatch(removeItem({ id }));
  }

  editItem(id: number) {
    this.dialog.open(EditItemDialogComponent, {
      width: '500px',
      data: id,
    });
  }

  filter(withDescription: boolean) {
    console.log('filter only with description', withDescription);
    this.store.dispatch(toggleWithDescription({ withDescription }));
  }

  toggleSelect(itemId: number) {
    console.log('toggle select ', itemId);
    this.store.dispatch(toggleCheckItem({ itemId }));
  }

  resetSelected() {
    console.log('reset selected');
  }
}
