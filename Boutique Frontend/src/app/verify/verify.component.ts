import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertService } from '../insert.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(private is:InsertService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  msg="";
  admin:Admin =new Admin();
  adminLogin(){
    console.log(this.admin);
    this.is.loginUserFromRemote2(this.admin).subscribe(_data=>{
      alert("your keyword matching with current keyword!! you have to change your password!!!");
      this.router.navigateByUrl('/forget');
    },_error=>{
      this.msg=("please recheck your correct email and keyword")
    });
  }
 /* btnclick(){
    this.router.navigateByUrl('/forget');
  }*/
  }



