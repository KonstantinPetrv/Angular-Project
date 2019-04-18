import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  id: string;
  product: Product;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.productService.getProduct(this.id).subscribe((data) => {
        this.product = data['product'];
      })
    })
  }

  productDelete() {
    this.productService
      .deleteProduct(this.id)
      .subscribe((data) => {
        this.router.navigate(['/']);
      })
  }
}
