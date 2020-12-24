import { Component, NgModule } from '@angular/core';
import {UserComponent} from './user/user.component';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './login/login.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'product',component: ProductComponent}, 
  { path: 'user',component: UserComponent}, 
  { path: '',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
