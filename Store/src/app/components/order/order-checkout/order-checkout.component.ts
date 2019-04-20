import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { OrderService } from 'src/app/core/services/order.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {
  products$: Observable<Array<Product>>;
  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    let ids = localStorage.getItem('cart').trim().split(',');
    ids.shift();
    this.products$ = this.productService.getCartProducts(ids)
  }


  postOrder() {
    let ids = localStorage.getItem('cart').trim().split(',');
    ids.shift();
    let data = {
      products: ids
    }
    this.orderService
      .postOrder(data)
      .subscribe((data) => {
        if (!data['success']) {
          this.toastr.error('Something went wrong with your order.');
          return;
        }
        this.toastr.success('Order created.');
        localStorage.setItem('cart', '');
        this.router.navigate(['/']);
      });
  }

  removeItem(id) {
    this.productService.removeFromCart(id)

    let ids = localStorage.getItem('cart').trim().split(',');
    ids.shift();
    this.products$ = this.productService.getCartProducts(ids)
  }

  emptyCart() {
    localStorage.setItem('cart', '');
  }
}
