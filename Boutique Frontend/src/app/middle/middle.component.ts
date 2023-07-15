import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { InsertService } from '../insert.service';


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
   public item1!:any;
  totalAmount:any= 0;
   email:any;
   productName:any;
 // public product : any=[];
  constructor(private router:Router,private is:InsertService,private cart:CartService) { }

  ngOnInit(): void {
   // console.log(this.cart.title);
   // this.productName=this.cart.getTitle();
    console.log(this.cart.price);
    this.totalAmount=this.cart.getAmount();
    this.item1=this.cart.cartItemList;
    console.log(this.totalAmount);
    this.item1=this.cart.cartItemList;
   // console.log(this.productName);
    
    this.email=this.cart.getEmail();
    console.log(this.email);
     }
checkout(insert1:any){
  this.cart.insertCheckout(insert1.value).subscribe();
  console.log(this.cart.email);
 // console.log(this.cart.title);
  alert("successfully paid!!");
  this.router.navigateByUrl('/customerp');
 //console.log(this.item1.join(this.email));
}

/*payment(){
  this.item1;
 //this.item1.concat(this.email==this.email)
 this.cart.addCheckout(this.item1).subscribe();
 //console.log(this.item1.join(this.email));
 console.log(this.item1);
  this.router.navigateByUrl('/middle');
}*/
}

