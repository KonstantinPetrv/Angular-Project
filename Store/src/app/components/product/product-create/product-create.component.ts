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
      title: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{4,}/)]],
      description: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{3,}/)]],
      price: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{3,}/)]],
      image: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{3,}/)]]
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
}
