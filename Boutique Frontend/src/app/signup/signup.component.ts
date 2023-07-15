import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
  }
  insertdetail(insert1:any){
    this.is.insertService(insert1.value).subscribe();
    alert("Successfully signup!!");


  
  }
  btnclick(){
    this.router.navigateByUrl('/customer');
  }
  



}
