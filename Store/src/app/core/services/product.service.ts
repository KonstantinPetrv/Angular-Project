import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../components/shared/models/product.model';

const baseUrl = 'http://localhost:9999/product';
const getAllP = baseUrl + '/all';
const getSingleP = baseUrl + '/details/';
const postP = baseUrl + '/create';
const putP = baseUrl + '/edit/';
const deleteP = baseUrl + '/delete/';
const cartP = baseUrl + '/order';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }

    postProduct(data) {
        return this.http.post(postP, data);
    }

    putProduct(id, data) {
        return this.http.post(putP + id, data);
    }

    getAllProducts() {
        return this.http.get<Array<Product>>(getAllP);
    }

    getCartProducts(id) {
        return this.http.post<Array<Product>>(cartP, id);
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