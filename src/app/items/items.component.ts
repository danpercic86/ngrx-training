import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, of} from "rxjs";
import {Items} from "../utils/item.model";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsComponent {
  items$: Observable<Items> = of([
    {id: 1, title: 'Card 1', description: "Something here"},
  ])

  constructor() {
  }

  addItem(){}
}
