import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product : any=[];
  public grandTotal !: number;
  price!:number;
  public item1!:any;
  email:String="";
  title:String="";
  constructor(private cart : CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.getproducts().subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cart.getTotalPrice();
    })
    this.item1=this.cart.cartItemList;
    this.price=this.grandTotal;
    this.item1=this.cart.cartItemList;
    this.email=this.cart.getEmail();
    this.item1=this.cart.cartItemList;
   // this.title=this.cart.getTitle();
  }
  removeItem(item: any){
    this.cart.removeCartItem(item);
  }
  emptyCart(){
    this.cart.removeAllCart();
  }
  payment(){
    this.item1;
   //this.item1.concat(this.email==this.email)
   //this.cart.setAmount(this.price);
   this.cart.addAllCart(this.item1).subscribe();
   this.cart.setAmount(this.price);
  // this.cart.setTitle(this.title);

   //console.log(this.item1.join(this.email));
   console.log(this.item1);
    this.router.navigateByUrl('/middle');
  }

}
