import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{4,}/)]],
      password: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{3,}/)]]
    });
  }
  logIn() {

    this.authService
      .login(this.form.value);
  }


  get f() {
    return this.form.controls
  }

  get invalid() {
    return this.form.invalid
  }
}
