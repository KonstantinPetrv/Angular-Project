import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:9999/auth';
const regUrl = baseUrl + '/register';
const loginUrl = baseUrl + '/login';

@Injectable()
export class AuthService {


    constructor(private http: HttpClient) { }

    register(body) {
        return this.http.post(regUrl, body);
    }

    login(body) {
        return this.http.post(loginUrl, body);
    }

    //   logout() {
    //     localStorage.clear();
    //   }

    //   isAuthenticated() {
    //     return localStorage.getItem('token') !== null;
    //   }

    //   getToken() {
    //     let token = localStorage.getItem('token');
    //     return token;
    //   }
}