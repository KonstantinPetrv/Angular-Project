import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ProductService } from './core/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/product/details/details.component';
import { LoginComponent } from './components/user/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/services/auth.service';
import { RegisterComponent } from './components/user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
