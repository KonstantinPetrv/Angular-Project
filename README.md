# The app

Angular-Project is a small shopping app with basic functionality.

## Idea
Anonymous users have access to a home view which contains all available products in the store. They also have access to a detailed view of products and can add them to their cart.

Logged-in users have all the functionality that anonymous users have. They can also make orders and see their order history.

Admins can do everything normal users can, however they can also create/edit/delete producs, and approve or cancel pending orders.

## Security and Validation
The app validates everything that the user is doing. Incase they gain access to a route they shouldn't have access to they will be redirected by the front-end. If they manage to bypass the front-end validation the backend will not allow them to make any requests wihtout proper authorization.

Errors and any appropriate messeges are being displayed by the [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) library.

## Routes

The app split in 3 parts
1. **Public** - Accessable by anyone.
2. **Private** - Logged in users have access.
3. **Administrative** - Only admins can access.

#### Authorization is being checked by a *AuthGuard* and *AdminGuard*.

``` javascript
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'product/details/:id', component: DetailsComponent },
  { path: 'product/create', component: ProductCreateComponent, canActivate: [AdminGuard] },
  { path: 'product/edit/:id', component: ProductEditComponent, canActivate: [AdminGuard] },
  { path: 'product/delete/:id', component: ProductDeleteComponent, canActivate: [AdminGuard] },
  { path: 'order/checkout', component: OrderCheckoutComponent },
  { path: 'order/pending', component: OrderPendingComponent, canActivate: [AdminGuard] },
  { path: 'order/history', component: OrderHistoryComponent, canActivate: [AuthGuard] }


```
## Services
 AuthenticationService handles authentication requests.
 
 OrderService handles all order requests.
 
 ProductService handles all product requests.