import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$: Observable<Array<Product>>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getAllProducts();
  }

}
