import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', loadChildren: './components/auth/auth.module#AuthModule' },
  { path: 'product', loadChildren: './components/product/product.module#ProductModule' },
  { path: 'order', loadChildren: './components/order/order.module#OrderModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
