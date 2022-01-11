import { createAction, props } from '@ngrx/store';
import { Item } from '../shared/models/item.model';

export const resetItemsAction = createAction('[Items Page] Reset items');
export const setItemsAction = createAction(
  '[Items] Set items',
  props<{ items: Item[] }>(),
);

export const addItemAction = createAction(
  '[Items Page] Add item',
  props<{ item: Item }>(),
);

export const removeItemAction = createAction(
  '[Items Page] Remove item',
  props<{ itemId: number }>(),
);
