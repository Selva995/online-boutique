import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { MiddleComponent } from './middle/middle.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LaptopDComponent } from './laptop-d/laptop-d.component';
import { UpdateLComponent } from './update-l/update-l.component';
import { CustomerDComponent } from './customer-d/customer-d.component';

import { CustomerpComponent } from './customerp/customerp.component';
import { ForgetComponent } from './forget/forget.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { VerifyComponent } from './verify/verify.component';
import { Home2Component } from './home2/home2.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { FindIdComponent } from './find-id/find-id.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AdminComponent,
    BrandsComponent,
    CustomerComponent,
    MiddleComponent,
    LaptopsComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    LaptopDComponent,
    UpdateLComponent,
    CustomerDComponent,
    CustomerpComponent,
    ForgetComponent,
    CartComponent,
    VerifyComponent,
    Home2Component,
    ViewCustomerComponent,
    FindIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BackButtonDisableModule.forRoot({preserveScrollPosition:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
