import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { Router } from '@angular/router';
import { Admin } from '../admin';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
  }
  insertdetail1(insert1:any){
    this.is.insertService1(insert1.value).subscribe();
    alert("Successfully change pasword!!"); 
  }

  btnclick(){
    this.router.navigateByUrl('/admin');
  }
}