import { createSelector } from '@ngrx/store';
import { getSelectors } from '@ngrx/router-store';
import { AppState } from './reducers';
import { DisplayItem } from '../shared/models/display-item.model';

export const selectAll = (state: AppState) => state.items.all;
export const selectDisplayed = (state: AppState) => state.items.displayed;
export const selectSelected = (state: AppState) => state.items.selected;
export const selectDisplayedAndSelected = createSelector(
  selectDisplayed,
  selectSelected,
  (displayed, selected) => displayed.map(
    item => ({ ...item, selected: selected.includes(item) } as DisplayItem),
  ),
);

const { selectRouteParams } = getSelectors();

export const selectItem = createSelector(
  selectAll,
  selectRouteParams,
  (items, { id }) => items.find(item => item.id === Number(id)),
);
