import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-find-id',
  templateUrl: './find-id.component.html',
  styleUrls: ['./find-id.component.css']
})
export class FindIdComponent implements OnInit {
  constructor(private is:InsertService,private router:Router) { 
   this.viewPayments();
  }
  ngOnInit(): void {
  }
 /* findDetail(insert1:any){
    console.log(insert1);
    this.is.findDetails(insert1.value).subscribe();
    alert("successfully finding!!");
    this.router.navigateByUrl('/customer-d');
  }*/
  listData:any;
  viewPayments(){
    //this.is.viewUsers().subscribe((resp:any)=>{this.listData=resp;})
    this.is.viewPayment().subscribe((result:any)=>{this.listData=result;})
  }
  
 
}
