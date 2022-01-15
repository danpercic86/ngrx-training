import { createReducer, on } from '@ngrx/store';
import { Item } from '../../shared/models/item.model';
import {
  deleteItem,
  setItems,
  toggleCheckItem,
  toggleWithDescription,
} from '../actions';

export interface ItemsState {
  all: Item[];
  displayedIds: number[];
  checkedIds: number[];
}

const initialState: ItemsState = {
  all: [],
  displayedIds: [],
  checkedIds: [],
};

export const itemsReducer = createReducer(
  initialState,
  on(setItems, (state, payload) => ({
    all: payload.items,
    displayedIds: payload.items.map(item => item.id),
    checkedIds: [],
  })),
  on(deleteItem, (state, payload) => ({
    all: state.all.filter(item => item.id !== payload.id),
    displayedIds: state.displayedIds.filter(id => id !== payload.id),
    checkedIds: state.checkedIds.filter(id => id !== payload.id),
  })),
  on(toggleCheckItem, (state, payload) => {
    if (state.checkedIds.includes(payload.itemId)) {
      return {
        ...state,
        checkedIds: state.checkedIds.filter(id => id !== payload.itemId),
      };
    }

    return { ...state, checkedIds: [...state.checkedIds, payload.itemId] };
  }),
  on(toggleWithDescription, (state, payload) => {
    if (payload.withDescription) {
      const displayedIds = state.all
        .filter(item => !!item.description)
        .map(item => item.id);
      return {
        ...state,
        displayedIds,
        checkedIds: state.checkedIds.filter(id => displayedIds.includes(id)),
      };
    }

    return { ...state, displayedIds: state.all.map(item => item.id) };
  }),
);
