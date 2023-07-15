import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
 // products:any;
 // productCount: any;
  constructor(private is:InsertService) {
   // this.loadUserCount();
   }
ngOnInit(): void {
 
  }
 
 /*loadUserCount(){
  this.is.getUserCount().subscribe((product:any)=>{
    this.productCount= product[0].Count;
  });
 } */

}

interface Gem {
  name: string;
  price: string;
  description: string;
  canPurchase: boolean;
  soldOut: boolean;
  image: string;
}



  var imgPath: string = "http://pre05.deviantart.net/e7cc/th/pre/f/2012/199/0/8/";

  var gems: Gem[] = [
      {
          name: "Product 1",
          price: "2.50",
          description: "AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development.",
          canPurchase: false,
          soldOut: true,
          image: imgPath + "gem_png_by_doloresdevelde-d57oyqr.png"
      },
      {
          name: "Product 2",
          price: "1.50",
          description: "AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development.",
          canPurchase: true,
          soldOut: false,
          image: imgPath + "gem_png_by_doloresdevelde-d57oyqr.png"
      },
      {
          name: "Product 3",
          price: "1.25",
          description: "AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development.",
          canPurchase: true,
          soldOut: false,
          image: imgPath + "gem_png_by_doloresdevelde-d57oyqr.png"
      },
      {
          name: "Product 4",
          price: "1.75",
          description: "AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development.",
          canPurchase: true,
          soldOut: false,
          image: imgPath + "gem_png_by_doloresdevelde-d57oyqr.png"
      },
      {
          name: "Product 5",
          price: "3.50",
          description: "AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development.",
          canPurchase: false,
          soldOut: true,
          image: imgPath + "gem_png_by_doloresdevelde-d57oyqr.png"
      },
      {
          name: "Product 6",
          price: "2.75",
          description: "AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development. AngularJS is a toolset for building the framework most suited to your application development.",
          canPurchase: true,
          soldOut: false,
          image: imgPath + "gem_png_by_doloresdevelde-d57oyqr.png"
      }
  ];

