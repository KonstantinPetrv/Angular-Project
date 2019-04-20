import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  form;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      image: ['', [Validators.required]]
    });
  }

  createProduct() {
    this.productService
      .postProduct(this.form.value)
      .subscribe((data) => {
        if (!data['success']) {
          this.toastr.error('Something went wrong.');
          return;
        }
        this.toastr.success('Product created.');
        this.router.navigate(['/']);
      })
  }

  get f() {
    return this.form.controls
  }

  get invalid() {
    return this.form.invalid
  }
}
