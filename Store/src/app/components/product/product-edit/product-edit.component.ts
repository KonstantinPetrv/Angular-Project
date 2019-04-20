import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../shared/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  form;
  product: Product;
  id: string;
  constructor(
    private fb: FormBuilder,
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

        this.form = this.fb.group({
          title: [this.product.title, [Validators.required]],
          description: [this.product.description, [Validators.required, Validators.minLength(5)]],
          price: [this.product.price, [Validators.required, Validators.min(0.01)]],
          image: [this.product.image, [Validators.required]]
        });
      })
    })

  }

  updateProduct() {
    this.productService
      .putProduct(this.id, this.form.value)
      .subscribe((data) => {
        if (!data['success']) {
          this.toastr.error('Something went wrong.');
          return;
        }
        this.toastr.success('Product edited.');
        this.router.navigate(['/product/details/' + this.id])
      })
  }

  get f() {
    return this.form.controls
  }

  get invalid() {
    return this.form.invalid
  }
}
