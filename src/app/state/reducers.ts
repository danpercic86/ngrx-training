import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { Item } from '../shared/models/item.model';
import {
  displayAll,
  filterWithDescription,
  resetItemsAction,
  resetSelectedAction,
  setItemsAction,
  toggleSelectAction,
} from './actions';

export interface ItemsState {
  all: Item[];
  displayed: Item[];
  selected: Item[];
}

export const initialItemsState: ItemsState = {
  all: [],
  displayed: [],
  selected: [],
};

export interface AppState {
  items: ItemsState;
}

export const itemsReducer = createReducer(
  initialItemsState,
  on(resetItemsAction, () => initialItemsState),
  on(setItemsAction, (state, payload) => ({
    ...state,
    all: payload.items,
    displayed: payload.items,
    selected: [],
  })),
  on(filterWithDescription, state => {
    const displayed = state.all.filter(item => !!item.description);
    const selected = state.selected.filter(item => displayed.includes(item));
    return { ...state, displayed, selected };
  }),
  on(displayAll, state => ({ ...state, displayed: state.all })),
  on(toggleSelectAction, (state, payload) => {
    const selectedItem = state.all.find(item => item.id === payload.itemId);
    if (!selectedItem) {
      return { ...state };
    }
    console.log(selectedItem);
    return { ...state, selected: [...state.selected, selectedItem] };
  }),
  on(resetSelectedAction, state => ({ ...state, selected: [] })),
);

export const reducers: ActionReducerMap<AppState> = {
  items: itemsReducer,
};
