import { createSelector } from '@ngrx/store';
import { AppState } from './reducers';

export const selectItems = (state: AppState) => state.items;
export const selectItemsCount = createSelector(
  selectItems,
  items => items.length,
);
export const selectItemsWithDescription = createSelector(selectItems, items => items.filter(item => !!item.description));
export const selectItemsWithDescriptionCount = createSelector(
  selectItemsWithDescription,
  items => items.length,
);
