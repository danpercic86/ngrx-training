import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { Item } from '../shared/models/item.model';
import {
  addItemAction,
  editItemAction,
  removeItemAction,
  resetItemsAction,
  setItemsAction,
} from './actions';

export interface AppState {
  items: Item[];
}

export const itemsReducer = createReducer(
  [] as Item[],
  on(resetItemsAction, () => [] as Item[]),
  on(setItemsAction, (state, payload) => payload.items),
  on(addItemAction, (state, payload) => [...state, payload.item]),
  on(removeItemAction, (state, payload) => state.filter(item => item.id !== payload.itemId)),
  on(editItemAction, (state, payload) => [
    ...state.filter(item => item.id !== payload.item.id),
    payload.item,
  ]),
);

export const reducers: ActionReducerMap<AppState> = {
  items: itemsReducer,
};
