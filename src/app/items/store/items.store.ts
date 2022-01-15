import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { initialState, ItemsState } from '../../state/reducers/items.reducer';
import { ApiService } from '../../shared/services/api.service';
import { Item } from '../../shared/models/item.model';

@Injectable()
export class ItemsStore extends ComponentStore<ItemsState> {
  readonly loadItems = this.effect(() => this.apiService.getItems().pipe(
    tapResponse(
      items => this.setItems(items),
      (error: HttpErrorResponse) => this.setState(initialState),
    ),
  ));

  readonly addItem = this.updater((state, item: Item) => ({
    ...state,
    all: [...state.all, item],
    displayedIds: [...state.displayedIds, item.id],
  }));

  readonly delete = this.updater((state, itemId: number) => ({
    all: state.all.filter(item => item.id !== itemId),
    displayedIds: state.displayedIds.filter(id => id !== itemId),
    checkedIds: state.checkedIds.filter(id => id !== itemId),
  }));

  readonly removeItem = this.effect((itemId$: Observable<number>) => itemId$.pipe(
    switchMap(id => this.apiService
      .remove(id)
      .pipe(tapResponse(() => this.delete(id), console.log))),
  ));

  constructor(private readonly apiService: ApiService) {
    super(initialState);
    // this.removeItem(1);
    // itemId$.next(1);
    // this.removeItem(14);
    // this.loadItems();
  }

  setItems(items: Item[]) {
    this.setState({
      all: items,
      displayedIds: items.map(item => item.id),
      checkedIds: [],
    });
  }

  addNewItem(item: Item) {
    this.patchState(state => ({
      all: [...state.all, item],
      displayedIds: [...state.displayedIds, item.id],
    }));
  }
}
