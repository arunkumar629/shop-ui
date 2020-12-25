import { CommonService } from 'src/app/common.service';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { HttpInterceptorService } from 'src/app/http-interceptor.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ServiceapiService } from './serviceapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: ServiceapiService
    },
    {
      provide: CommonService
    },
    {
      provide: AuthGuardService
    },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
