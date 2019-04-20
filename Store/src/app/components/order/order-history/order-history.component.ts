import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../shared/models/order.model';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders$: Observable<Array<Order>>;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders$ = this.orderService.getOrderHistory();
  }

  totalPrice(products) {
    let price = 0;
    products.forEach(p => {
      price += p.price;
    });
    return price;
  }

  orderStatus(type) {
    let status = 'text-success';
    if (type === 'Pending') {
      status = 'text-warning';
    }
    return status;
  }
}
