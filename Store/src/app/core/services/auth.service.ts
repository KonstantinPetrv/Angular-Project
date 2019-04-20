import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const baseUrl = 'http://localhost:9999/auth';
const regUrl = baseUrl + '/register';
const loginUrl = baseUrl + '/login';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

    register(body) {
        return this.http.post(regUrl, body);
    }

    login(body) {
        return this.http.post(loginUrl, body)
            .subscribe((data) => {
                if (!data['success']) {
                    this.toastr.error('Wrong username or password.');
                    return;
                }
                localStorage.setItem('username', data['user'].username);
                localStorage.setItem('roles', data['user'].roles);
                localStorage.setItem('token', data['token']);
                this.toastr.success('Welcome ' + data['user'].username)
                this.router.navigate(['/']);
            });
    }

    logout() {
        let cart = localStorage.getItem('cart');
        localStorage.clear();
        localStorage.setItem('cart', cart);
        this.router.navigate(['/']);
    }

    isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    isAdmin() {
        let roles = localStorage.getItem('roles');
        if (roles !== null) {
            return roles.includes('Admin');
        }
        return false;
    }

    getToken() {
        let token = localStorage.getItem('token');
        return token;
    }

    getUsername() {
        let username = localStorage.getItem('username');
        return username;
    }
}