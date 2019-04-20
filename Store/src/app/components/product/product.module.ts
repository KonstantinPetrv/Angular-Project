import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create/product-create.component';
import { DetailsComponent } from './details/details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'create', component: ProductCreateComponent, canActivate: [AuthGuard] },
      { path: 'edit/:id', component: ProductEditComponent, canActivate: [AuthGuard] },
      { path: 'delete/:id', component: ProductDeleteComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [
    DetailsComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
  ]
})
export class ProductModule { }
