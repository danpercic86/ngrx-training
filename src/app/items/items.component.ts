import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
import { ApiService } from '../shared/services/api.service';
import { EditItemDialogComponent } from './edit-item-dialog/edit-item-dialog.component';
import { AppState } from '../state/reducers';
import { setItemsAction } from '../state/actions';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsComponent {
  readonly items$ = this.store.select(state => state.items.all);

  constructor(
    private readonly dialog: MatDialog,
    private readonly apiService: ApiService,
    private readonly store: Store<AppState>,
  ) {
    this.apiService
      .getItems()
      .pipe(tap(items => this.store.dispatch(setItemsAction({ items }))))
      .subscribe(console.log);
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
  }
}
