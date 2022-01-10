import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ngrx';

  constructor(readonly apiService: ApiService) {
    apiService.loadItems();
  }
}
