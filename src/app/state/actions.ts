import { createAction, props } from '@ngrx/store';
import { Item } from '../shared/models/item.model';

export const resetItemsAction = createAction('[Items Page] Reset Items');
export const setItemsAction = createAction(
  '[Items Page] Set Items',
  props<{ items: Item[] }>(),
);
export const filterWithDescription = createAction(
  '[Items Page] Filter with description',
);
export const displayAll = createAction('[Items Page] Display all');
export const toggleSelectAction = createAction(
  '[Items Page] Toggle select',
  props<{ itemId: number }>(),
);
export const resetSelectedAction = createAction('[Items Page] Reset selected');
