import { createReducer, on } from '@ngrx/store';
import {
  deleteItem, loadItems, removeItem, setItems,
} from '../actions';

export const loadingReducer = createReducer(
  false,
  on(loadItems, () => true),
  on(setItems, () => false),
  on(removeItem, () => true),
  on(deleteItem, () => false),
);
