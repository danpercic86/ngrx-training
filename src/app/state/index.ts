import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { itemsReducer, ItemsState } from './reducers/items.reducer';
import { loadingReducer } from './reducers/loading.reducer';

export interface AppState {
  items: ItemsState;
  loading: boolean;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  items: itemsReducer,
  loading: loadingReducer,
  router: routerReducer,
};
