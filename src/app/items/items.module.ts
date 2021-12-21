import {NgModule} from '@angular/core';
import {ItemsComponent} from "./items.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {ItemComponent} from './item/item.component';

@NgModule({
  declarations: [
    ItemsComponent,
    ItemComponent,
  ],
  imports: [
    MatGridListModule,
    MatCardModule,
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild([
      {path: '', component: ItemsComponent},
      {path: ':id', component: ItemComponent}
    ])
  ],
})
export class ItemsModule {
}
