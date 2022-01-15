import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  deleteItem, loadItems, removeItem, setItems,
} from '../actions';
import { ApiService } from '../../shared/services/api.service';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(loadItems),
    switchMap(() => this.apiService.getItems()),
    map(items => setItems({ items })),
  ));

  deleteItem$ = createEffect(() => this.actions$.pipe(
    tap(console.log),
    ofType(removeItem),
    switchMap(payload => this.apiService.remove(payload.id).pipe(map(id => deleteItem({ id })))),
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly apiService: ApiService,
  ) {}
}
