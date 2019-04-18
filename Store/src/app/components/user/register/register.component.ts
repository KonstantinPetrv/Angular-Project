import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{4,}/)]],
      password: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{3,}/)]]
    });
  }
  register() {

    this.authService
      .register(this.form.value)
      .subscribe((data) => {
        if (!data.success) {
          return;
        }
        this.authService
          .login(this.form.value);
      });
  }


  get f() {
    return this.form.controls
  }
}
