import { createSelector } from '@ngrx/store';
import { getSelectors } from '@ngrx/router-store';
import { AppState } from './index';
import { DisplayedItem } from '../shared/models/item.model';
import { ItemsState } from './reducers/items.reducer';

export const selectAllItems = (state: AppState) => state.items.all;
export const selectDisplayedIds = (state: AppState) => state.items.displayedIds;
export const selectCheckedIds = (state: AppState) => state.items.checkedIds;
export const selectDisplayed = createSelector(
  (state: ItemsState) => state.all,
  (state: ItemsState) => state.displayedIds,
  (state: ItemsState) => state.checkedIds,
  (allItems, displayedIds, checkedIds) => allItems
    .filter(item => displayedIds.includes(item.id))
    .map(
      item => ({
        ...item,
        checked: checkedIds.includes(item.id),
      } as DisplayedItem),
    ),
);
export const routerSelectors = getSelectors();
export const selectItem = createSelector(
  selectAllItems,
  routerSelectors.selectRouteParams,
  (displayed, { id }) => {
    console.log(id);
    return displayed.find(item => item.id === Number(id));
  },
);
