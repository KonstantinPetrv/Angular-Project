import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/components/shared/models/order.model';


const baseUrl = 'http://localhost:9999/orders';
const postO = baseUrl + '/submit'
const getPendingO = baseUrl + '/pending';
const approveO = baseUrl + '/approve/';
const deleteO = baseUrl + '/delete/';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient) { }

    postOrder(data) {
        return this.http.post(postO, data);
    }

    getPendingOrders() {
        return this.http.get<Array<Order>>(getPendingO);
    }

    postApproveOrder(id) {
        return this.http.post<Array<Order>>(approveO + id, {});
    }

    deleteOrder(id) {
        return this.http.delete(deleteO + id);
    }
}