import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/components/shared/models/order.model';


const baseUrl = 'http://localhost:9999/orders';
const postO = baseUrl + '/submit'
const getPendingO = baseUrl + '/pending';
// const getSingleP = baseUrl + '/details/';
// const postP = baseUrl + '/create';
// const putP = baseUrl + '/edit/';
// const deleteP = baseUrl + '/delete/';
// const cartP = baseUrl + '/order';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient) { }

    postOrder(data) {
        return this.http.post(postO, data);
    }

    // putProduct(id, data) {
    //     return this.http.post(putP + id, data);
    // }

    getPendingOrders() {
        return this.http.get<Array<Order>>(getPendingO);
    }

    // getCartProducts(id) {
    //     return this.http.post<Array<Product>>(cartP, id);
    // }

    // getProduct(id): Observable<Product> {
    //     return this.http.get<Product>(getSingleP + id);
    // }

    // deleteProduct(id) {
    //     return this.http.delete(deleteP + id);
    // }
}