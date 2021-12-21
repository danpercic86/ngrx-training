import {ChangeDetectionStrategy, Component} from '@angular/core';
import {List} from "../utils/types";
import {Observable, of} from "rxjs";

interface DashboardCard {
  readonly title: string;
}

type DashboardCards = List<DashboardCard>;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  cards$: Observable<DashboardCards> = of([
    {title: 'Card 1'},
    {title: 'Card 2'},
    {title: 'Card 3'},
    {title: 'Card 4'}
  ])

  constructor() {
  }
}
