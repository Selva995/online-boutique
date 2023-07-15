import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  public productList : any ;
  public totalItem : number =0;


  constructor(private api : ApiService,private Cart : CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
        this.productList = res;
        this.productList.forEach((a:any)=> {
          Object.assign(a,{quantity:1,total:a.price});
          
        });
    })
    this.Cart.getproducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  addtocart(item:any){
    this.Cart.addtocart(item);

  }
  

}
