import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ProductService } from './core/services/product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetailsComponent } from './components/product/details/details.component';
import { LoginComponent } from './components/user/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/services/auth.service';
import { RegisterComponent } from './components/user/register/register.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { JwtInterceptorService } from './core/interceptors/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
