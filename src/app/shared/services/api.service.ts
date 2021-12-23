import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getItems(): Observable<Item[]> {
    return of([
      { id: 1, title: 'Pizza', description: 'Margherita' },
      { id: 2, title: 'Burger', description: 'Cu bacon' },
      { id: 3, title: 'Spaghete', description: 'Margherita' },
      { id: 4, title: 'Ceva', description: 'Margherita' },
      { id: 5, title: 'Pizza 2' },
      { id: 6, title: 'Pizza 4' },
      { id: 7, title: 'Pizza 5' },
      { id: 8, title: 'Pizza 6' },
      { id: 9, title: 'Pizza 7' },
      { id: 10, title: 'Pizza 8', description: 'Margherita' },
      { id: 11, title: 'Pizza 9', description: 'Margherita' },
      { id: 12, title: 'Pizza 12', description: 'Margherita' },
    ]);
  }

  loadItems() {
    return this.getItems().pipe(take(1)).subscribe();
  }
}
