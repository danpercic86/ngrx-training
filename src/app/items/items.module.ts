import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items.component';
import { EditItemDialogComponent } from './edit-item-dialog/edit-item-dialog.component';

@NgModule({
  declarations: [
    ItemsComponent,
    ItemComponent,
    AddItemDialogComponent,
    EditItemDialogComponent,
  ],
  imports: [
    MatGridListModule,
    MatCardModule,
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: ItemsComponent },
      { path: ':id', component: ItemComponent },
    ]),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
  ],
})
export class ItemsModule {
}
