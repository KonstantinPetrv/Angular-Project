import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) { }

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
          return;
        }
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
