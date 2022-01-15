import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { entityItemsReducer, EntityItemsState } from './reducers/items.reducer';
import { loadingReducer } from './reducers/loading.reducer';

export interface AppState {
  items: EntityItemsState;
  loading: boolean;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  items: entityItemsReducer,
  loading: loadingReducer,
  router: routerReducer,
};
