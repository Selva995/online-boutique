import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component'; 
import { CustomerComponent } from './customer/customer.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { MiddleComponent } from './middle/middle.component';
import { CustomerpComponent } from './customerp/customerp.component';
import { LaptopsComponent } from './laptops/laptops.component'; 
import { LaptopDComponent } from './laptop-d/laptop-d.component';
import { CustomerDComponent } from './customer-d/customer-d.component';
import { ForgetComponent } from './forget/forget.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { VerifyComponent } from './verify/verify.component';
import { Home2Component } from './home2/home2.component';
import { UpdateLComponent } from './update-l/update-l.component';
import { HomeComponent } from './home/home.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { FindIdComponent } from './find-id/find-id.component';

const routes: Routes = [
{path:'about',component:AboutComponent},
{path:'admin',component:AdminComponent},
{path:'customer',component:CustomerComponent},
{path:'signup',component:SignupComponent},
{path:'contact',component:ContactComponent},
{path:'forget',component:ForgetComponent},
{path:'verify',component:VerifyComponent},

{path:'middle',component:MiddleComponent},
{path:'laptop-d',component: LaptopDComponent},
{path:'customer-d',component:CustomerDComponent},
{path:'customerp',component:CustomerpComponent},
{path:'laptops',component:LaptopsComponent},
{path:'brands',component:BrandsComponent},
{path:'cart',component:CartComponent},
{path:'home2',component:Home2Component},
{path:'update-l',component:UpdateLComponent},
{path:'home',component:HomeComponent},
{path:'view-customer',component:ViewCustomerComponent},
{path:'find-id',component:FindIdComponent}





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
