import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { InsertService } from '../insert.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private is:InsertService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  msg="";
  admin:Admin =new Admin();
  adminLogin(){
    console.log(this.admin);
    this.is.loginUserFromRemote1(this.admin).subscribe(_data=>{
      alert("logged in successfully!!");
      this.router.navigateByUrl('/home2');
    },_error=>{
      this.msg=("please recheck your correct email and password")
    })
  }
  

}
