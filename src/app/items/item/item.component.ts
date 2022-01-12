import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from '../../shared/services/api.service';
import { AppState } from '../../state/reducers';
import { selectItem } from '../../state/selectors';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  readonly item$ = this.store.select(selectItem);

  constructor(
    activatedRoute: ActivatedRoute,
    apiService: ApiService,
    private readonly store: Store<AppState>,
  ) {
    // const id = Number(activatedRoute.snapshot.paramMap.get('id'));
    // this.item$ = apiService
    //   .getItems()
    //   .pipe(
    //     map(items => items.find(item => item.id === id)),
    //   ) as Observable<Item>;
  }

  removeItem(id: number) {
    console.log('remove item with id ', id);
  }
}
