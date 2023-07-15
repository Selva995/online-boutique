import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-customerp',
  templateUrl: './customerp.component.html',
  styleUrls: ['./customerp.component.css']
})
export class CustomerpComponent implements OnInit {
  public totalItem : number =0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getproducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
