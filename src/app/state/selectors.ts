import { createSelector } from '@ngrx/store';
import { getSelectors } from '@ngrx/router-store';
import { AppState } from './index';
import { DisplayedItem } from '../shared/models/item.model';
import { itemsAdapter } from './reducers/items.reducer';

export const selectAllItems = (state: AppState) => state.items.entities;
export const selectDisplayedIds = (state: AppState) => state.items.displayedIds;
export const selectCheckedIds = (state: AppState) => state.items.checkedIds;
export const selectDisplayed = createSelector(
  // (state: ItemsState) => state.all,
  // (state: ItemsState) => state.displayedIds,
  // (state: ItemsState) => state.checkedIds,
  selectAllItems,
  selectDisplayedIds,
  selectCheckedIds,
  (allItems, displayedIds, checkedIds) => Object.values(allItems)
    .filter(item => displayedIds.includes(Number(item?.id)))
    .map(
      item => ({
        ...item,
        checked: checkedIds.includes(Number(item?.id)),
      } as DisplayedItem),
    ),
);
export const routerSelectors = getSelectors();
export const entitySelectors = itemsAdapter.getSelectors();
export const selectAll = createSelector(
  (state: AppState) => state.items,
  entitySelectors.selectAll, // (items: ItemsState) => Object.values(items.entities)
);
export const selectItem = createSelector(
  selectAllItems,
  routerSelectors.selectRouteParams,
  (displayed, { id }) => {
    console.log(id);
    // return displayed.find(item => item.id === Number(id));
    return displayed[Number(id)];
  },
);
