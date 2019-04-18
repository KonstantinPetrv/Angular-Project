import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string;
  product: Product;
  actionType: Boolean = true;
  isAdmin: Boolean = false;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.productService.getProduct(this.id).subscribe((data) => {
        this.product = data['product'];
      })
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', '');
      } else {
        let tempCart = [...localStorage.getItem('cart').split(',')];
        if (tempCart.includes(this.id)) {
          this.actionType = false;
        }
      }
    })
    if (localStorage.getItem('roles')) {
      if (localStorage.getItem('roles').includes('Admin'))
        this.isAdmin = true
    }
  }

  addToCart() {
    let tempCart = [...localStorage.getItem('cart').split(','), this.id];
    localStorage.setItem('cart', tempCart.join(','));
    this.actionType = false;
  }

  removeFromCart() {
    let tempCart = [...window.localStorage.getItem('cart').trim().split(',')]
    tempCart.splice(tempCart.indexOf(this.id), 1);
    window.localStorage.setItem('cart', tempCart.join(','));
    this.actionType = true;
  }

}
