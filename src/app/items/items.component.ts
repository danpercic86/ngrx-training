import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
import { ApiService } from '../shared/services/api.service';
import { EditItemDialogComponent } from './edit-item-dialog/edit-item-dialog.component';
import { AppState } from '../state/reducers';
import {
  displayAll,
  filterWithDescription,
  loadItemsAction,
  resetItemsAction,
  resetSelectedAction,
  toggleSelectAction,
} from '../state/actions';
import { selectDisplayedAndSelected } from '../state/selectors';
import { DisplayItem } from '../shared/models/display-item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsComponent {
  readonly items$: Observable<DisplayItem[]> = this.store.select(
    selectDisplayedAndSelected,
  );

  constructor(
    private readonly dialog: MatDialog,
    private readonly apiService: ApiService,
    private readonly store: Store<AppState>,
  ) {}

  async loadItems() {
    // const items = await firstValueFrom(this.apiService.getItems());
    this.store.dispatch(loadItemsAction());
  }

  resetItems() {
    this.store.dispatch(resetItemsAction());
  }

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
    if (withDescription) {
      this.store.dispatch(filterWithDescription());
    } else {
      this.store.dispatch(displayAll());
    }
  }

  toggleSelect(itemId: number) {
    console.log('toggle select ', itemId);
    this.store.dispatch(toggleSelectAction({ itemId }));
  }

  resetSelected() {
    console.log('reset selected');
    this.store.dispatch(resetSelectedAction());
  }
}
