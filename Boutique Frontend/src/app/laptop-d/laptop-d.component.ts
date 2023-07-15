import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-laptop-d',
  templateUrl: './laptop-d.component.html',
  styleUrls: ['./laptop-d.component.css']
})
export class LaptopDComponent implements OnInit {
   

   constructor(private is:InsertService,private router:Router){
    this.viewLaptop();
    
  }
    ngOnInit(): void {
  }
 
 listData:any;
 viewLaptop(){
   this.is.viewLaptops().subscribe((resp:any)=>{this.listData=resp;})
 }
 



}
