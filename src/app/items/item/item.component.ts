import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state';
import { selectItem } from '../../state/selectors';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  readonly item$ = this.store.select(selectItem);

  constructor(readonly store: Store<AppState>) {
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
