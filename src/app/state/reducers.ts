import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { Item } from '../shared/models/item.model';
import {
  addItemAction,
  removeItemAction,
  resetItemsAction,
  setItemsAction,
} from './actions';

export interface ItemsState {
  all: Item[];
  selected: Item[];
}

export const initialState: ItemsState = {
  all: [],
  selected: [],
};

export const itemsReducer = createReducer(
  initialState,
  on(resetItemsAction, () => ({
    all: [],
    selected: [],
  })),
  on(setItemsAction, (_, { items }) => {
    console.log(items);
    return {
      all: [...items],
      selected: [],
    };
  }),
  on(addItemAction, (state, { item }) => ({
    ...state,
    all: [...state.all, item],
  })),
  on(removeItemAction, (state, { itemId }) => ({
    all: [...state.all.filter(item => item.id !== itemId)],
    selected: [...state.selected.filter(item => item.id !== itemId)],
  })),
);

export interface AppState {
  items: ItemsState;
}

export const reducers: ActionReducerMap<AppState> = {
  items: itemsReducer,
};
