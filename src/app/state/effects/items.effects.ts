import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadItemsAction, setItemsAction } from '../actions';
import { ApiService } from '../../shared/services/api.service';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(loadItemsAction),
    switchMap(() => this.apiService.getItems()),
    map(items => setItemsAction({ items })),
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly apiService: ApiService,
  ) {}
}
