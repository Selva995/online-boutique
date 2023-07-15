import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { InsertService } from '../insert.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  constructor(private is:InsertService,private router:Router,private route:ActivatedRoute,private cart:CartService) { }
  ngOnInit(): void {
  }
  msg="";
  user:User =new User();
  userLogin(){
    console.log(this.user);
    this.is.loginUserFromRemote(this.user).subscribe(_data=>{
      this.cart.setEmail(this.user.email);
      alert("logged in successfully!!");

      this.router.navigateByUrl('/customerp');
    },_error=>{
      this.msg=("please recheck your correct email and password")
    })
  }
}
