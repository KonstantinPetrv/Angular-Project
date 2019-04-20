import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { OrderService } from 'src/app/core/services/order.service';
import { OrderPendingComponent } from './order-pending/order-pending.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'checkout', component: OrderCheckoutComponent },
      { path: 'pending', component: OrderPendingComponent, canActivate: [AdminGuard] }
    ])
  ],
  declarations: [
    OrderCheckoutComponent,
    OrderPendingComponent
  ],
  providers: [
    OrderService
  ]
})
export class OrderModule { }
