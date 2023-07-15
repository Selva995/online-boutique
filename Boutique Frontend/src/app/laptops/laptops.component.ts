import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
  }
  addDetail(insert1:any){
    this.is.insertLaptop(insert1.value).subscribe();
    alert("successfully added");
    this.router.navigateByUrl('/laptop-d');
 }

}
