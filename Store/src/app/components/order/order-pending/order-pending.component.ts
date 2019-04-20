import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../shared/models/order.model';
import { OrderService } from 'src/app/core/services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-pending',
  templateUrl: './order-pending.component.html',
  styleUrls: ['./order-pending.component.css']
})
export class OrderPendingComponent implements OnInit {
  orders$: Observable<Array<Order>>;
  constructor(private orderService: OrderService, private toastr: ToastrService) { }

  ngOnInit() {
    this.orders$ = this.orderService.getPendingOrders();
  }

  approveOrder(id) {
    this.orderService
      .postApproveOrder(id)
      .subscribe((data) => {
        if (!data['success']) {
          this.toastr.error('Someting went wrong');
          return;
        }
        this.toastr.success('Order approved.');
      })
  }

  cancelOrder(id) {
    this.orderService
      .deleteOrder(id)
      .subscribe((data) => {
        if (!data['success']) {
          this.toastr.error('Someting went wrong.');
          return;
        }
        this.toastr.success('Order canceled');
      })
  }

  totalPrice(products) {
    let price = 0;
    products.forEach(p => {
      price += p.price;
    });
    return price;
  }

}
