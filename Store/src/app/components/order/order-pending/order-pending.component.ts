import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../shared/models/order.model';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order-pending',
  templateUrl: './order-pending.component.html',
  styleUrls: ['./order-pending.component.css']
})
export class OrderPendingComponent implements OnInit {
  orders$: Observable<Array<Order>>;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders$ = this.orderService.getPendingOrders();
  }

}
