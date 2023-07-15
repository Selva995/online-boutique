import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  email:String="";
  price!:number;
  title:String="";
  public cartItemList : any=[]
  public myItems : any=[]
  public productList =new BehaviorSubject<any>([]);



  constructor(private http:HttpClient) { }
    url11="http://localhost:8080/payments"
  getproducts(){
     return this.productList.asObservable();
  }
  setproducts(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  setEmail(data:any){
    this.email=data;
  }
  getEmail(){
    console.log(this.email);
     return this.email;
  }
  setAmount(data:any){
    this.price=data;
    console.log(this.price);
  }
  getAmount(){
    console.log(this.price);
     return this.price;
  }
 /* setTitle(data:any){
    this.title=data;
    console.log(this.title);
  }
  getTitle(){
    console.log(this.title);
     return this.title;
  }*/
  addtocart(product:any){
    console.log(this.email);
    product.email=this.email;
    console.log(product.email);
    console.log(product);
    this.cartItemList.push(product);
   this.cartItemList.join(this.email);
    console.log(this.cartItemList.join(this.email))
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
}
getTotalPrice():number{
  let grandTotal = 0;
  this.cartItemList.map((a:any)=>{
    grandTotal +=a.total;
  })
  return grandTotal;
}
removeCartItem(product: any){
  this.cartItemList.map((a:any, index:any)=>{
    if(product.id=== a.id){
      this.cartItemList.splice(index,1);
    }
  })
}
removeAllCart(){
  this.cartItemList = []
  this.productList.next(this.cartItemList);
}
addAllCart(data:any){
  this.productList.next(this.cartItemList);
  return this.http.post("http://localhost:8080/cart",data);
}
addCheckout(data:any){
  this.productList.next(this.cartItemList);
  return this.http.post("http://localhost:8080/details",data);
}
insertCheckout(data:any){
  data.email=this.email;
  data.totalAmount=this.price;
  data.productName=this.title;
  return this.http.post("http://localhost:8080/payments",data)
 }
}


