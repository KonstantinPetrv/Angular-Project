import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{4,}/)]],
      password: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{3,}/)]]
    });
  }
  logIn() {

    this.authService
      .login(this.form.value)
      .subscribe((data) => {
        console.dir(data);
      });
  }


  get f() {
    return this.form.controls
  }
}
