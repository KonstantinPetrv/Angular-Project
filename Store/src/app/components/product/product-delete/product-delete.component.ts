import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  id: string;
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.productService.getProduct(this.id).subscribe((data) => {
        this.product = data['product'];
        if(this.product == null){
		this.router.navigate(['/']);
		}
	  })
    })
  }

  productDelete() {
    this.productService
      .deleteProduct(this.id)
      .subscribe((data) => {
        this.toastr.success('Product deleted');
      })
  }
}
