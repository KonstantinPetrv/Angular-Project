import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:9999/auth';
const regUrl = baseUrl + '/register';
const loginUrl = baseUrl + '/login';

@Injectable()
export class AuthService {


    constructor(private http: HttpClient, private router: Router) { }

    register(body) {
        return this.http.post(regUrl, body);
    }

    login(body) {
        return this.http.post(loginUrl, body)
            .subscribe((data) => {
                if (!data.success) {
                    return;
                }
                localStorage.setItem('username', data.user.username);
                localStorage.setItem('roles', data.user.roles);
                localStorage.setItem('token', data.token);
                this.router.navigate(['/']);
            });
    }

    logout() {
        localStorage.clear();
    }

    isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    getToken() {
        let token = localStorage.getItem('token');
        return token;
    }
}