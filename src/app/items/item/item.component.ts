import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../shared/services/api.service';
import { Item } from '../../shared/models/item.model';
import { isNotNullOrUndefined } from '../../shared/utils/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  readonly item$: Observable<Item>;

  constructor(activatedRoute: ActivatedRoute, router: Router, apiService: ApiService) {
    const id = Number(activatedRoute.snapshot.paramMap.get('id'));
    this.item$ = apiService.getItems().pipe(
      map(items => items.find(item => item.id === id)),
      tap(async item => {
        if (item === null || item === undefined) {
          await router.navigate(['items']);
        }
      }),
      filter(isNotNullOrUndefined),
    );
  }

  removeItem(id: number) {
    console.log('remove item with id ', id);
  }
}
