import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { OrderService } from 'src/app/core/services/order.service';
import { OrderPendingComponent } from './order-pending/order-pending.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'checkout', component: OrderCheckoutComponent },
      { path: 'pending', component: OrderPendingComponent, canActivate: [AdminGuard] },
      { path: 'history', component: OrderHistoryComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [
    OrderCheckoutComponent,
    OrderPendingComponent,
    OrderHistoryComponent
  ],
  providers: [
    OrderService
  ]
})
export class OrderModule { }
