import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Item } from '../shared/models/item.model';

export const loadItems = createAction('[Items API] Load items');
export const setItems = createAction(
  '[Items API] Set items',
  props<{ items: Item[] }>(),
);
export const removeItem = createAction(
  '[Items API] Remove Item',
  props<{ id: number }>(),
);
export const deleteItem = createAction(
  '[Items Page] Delete item',
  props<{ id: number }>(),
);

export const toggleCheckItem = createAction(
  '[Items Page] Toggle check item',
  props<{ itemId: number }>(),
);

export const toggleWithDescription = createAction(
  '[Items Page] Toggle with description',
  props<{ withDescription: boolean }>(),
);

export const editItem = createAction(
  '[Items Edit Dialog] Edit item',
  props<{ item: Update<Item> }>(),
);
