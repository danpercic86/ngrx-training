import { createSelector } from '@ngrx/store';
import { AppState } from './reducers';
import { DisplayItem } from '../shared/models/display-item.model';

export const selectDisplayed = (state: AppState) => state.items.displayed;
export const selectSelected = (state: AppState) => state.items.selected;
export const selectDisplayedAndSelected = createSelector(
  selectDisplayed,
  selectSelected,
  (displayed, selected) => displayed.map(
    item => ({ ...item, selected: selected.includes(item) } as DisplayItem),
  ),
);
