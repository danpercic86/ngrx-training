import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Item } from '../../shared/models/item.model';
import {
  deleteItem,
  editItem,
  setItems,
  toggleCheckItem,
  toggleWithDescription,
} from '../actions';

export interface ItemsState {
  all: Item[];
  displayedIds: number[];
  checkedIds: number[];
}

export interface EntityItemsState extends EntityState<Item> {
  displayedIds: number[];
  checkedIds: number[];
}

function sortById(a: Item, b: Item) {
  if (a.id > b.id) {
    return a.id;
  }

  return b.id;
}

export const itemsAdapter = createEntityAdapter<Item>({
  selectId: (item: Item) => item.id,
  sortComparer: sortById,
});

export const entityInitialState = itemsAdapter.getInitialState({
  displayedIds: [] as number[],
  checkedIds: [] as number[],
});

export const entityItemsReducer = createReducer(
  entityInitialState,
  on(setItems, (state, payload) => itemsAdapter.setAll(payload.items, {
    ...state,
    displayedIds: payload.items.map(item => item.id),
    checkedIds: [],
  })),
  on(deleteItem, (state, payload) => {
    console.log(payload);
    return itemsAdapter.removeOne(payload.id, {
      ...state,
      displayedIds: state.displayedIds.filter(id => id !== payload.id),
      checkedIds: state.checkedIds.filter(id => id !== payload.id),
    });
  }),
  on(editItem, (state, payload) => itemsAdapter.updateOne(payload.item, state)),
);

export const initialState: ItemsState = {
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
