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
  product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = data['id'];
      this.productService.getProduct(id).subscribe((data) => {
        this.product = data['product'];
      })
    })
  }

}
