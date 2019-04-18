import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../components/shared/models/product.model';

const baseUrl = 'http://localhost:9999/product';
const getAllP = baseUrl + '/all';
const getSingleP = baseUrl + '/details/';
const postP = baseUrl + '/create';
const deleteP = baseUrl + '/delete/';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }

    postProduct(data) {
        return this.http.post(postP, data);
    }

    getAllProducts() {
        return this.http.get<Array<Product>>(getAllP);
    }

    getProduct(id): Observable<Product> {
        return this.http.get<Product>(getSingleP + id);
    }

    deleteProduct(id) {
        return this.http.delete(deleteP + id);
    }
}

// getUserFurniture(): Observable<Array<Product>> {
//     return this.http.get<Array<Product>>(getUserF);
// }