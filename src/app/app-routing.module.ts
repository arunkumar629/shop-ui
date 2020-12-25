import { Component, NgModule } from '@angular/core';
import {UserComponent} from './user/user.component';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "src/app/auth-guard.service";

const routes: Routes = [
  { path: '',component: ProductComponent,         canActivate: [AuthGuardService]}, 
  { path: 'user',component: UserComponent}, 
  { path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
