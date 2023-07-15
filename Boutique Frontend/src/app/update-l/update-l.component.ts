import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-update-l',
  templateUrl: './update-l.component.html',
  styleUrls: ['./update-l.component.css']
})
export class UpdateLComponent implements OnInit {

  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
  }
  deleteDetail(insert1:any){
    this.is.deleteLaptop(insert1.value).subscribe();
    alert("successfully delete!!");
    this.router.navigateByUrl('/laptop-d');
  }
  
}
