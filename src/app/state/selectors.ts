import { createSelector } from '@ngrx/store';
import { AppState } from './reducers';

export const selectAllItems = createSelector(
  (state: AppState) => state.items,
  items => items.all,
);
