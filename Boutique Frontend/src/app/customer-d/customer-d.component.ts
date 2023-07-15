import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-customer-d',
  templateUrl: './customer-d.component.html',
  styleUrls: ['./customer-d.component.css']
})
export class CustomerDComponent implements OnInit {
//users:any;
/// showSearch!:boolean;
  constructor(private is:InsertService,private router:Router) {
   this.viewUser();
   // this.search(this.id);
   }
  ngOnInit(): void {
  }
  listData:any;
  viewUser(){
    //this.is.viewUsers().subscribe((resp:any)=>{this.listData=resp;})
    this.is.viewUsers().subscribe((result:any)=>{this.listData=result;})
  }
 /* id:any
  search(id:number) {
    this.is.findCartById(this.id).subscribe((users:any) => {
      this.users = users;
      this.showSearch = true;
    });
  }
  btnclick(){
    this.router.navigateByUrl('/find-id');
  }*/
}


