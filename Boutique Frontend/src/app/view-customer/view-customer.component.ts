import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  
  constructor(private router:Router,private is:InsertService,private cart:CartService) { 
    this.viewCustomer();
  }
  
  ngOnInit(): void {
    
  }
 listData:any;
 viewCustomer(){
  this.is.viewCustomers().subscribe((resp:any)=>{this.listData=resp;})
 }
 

}
