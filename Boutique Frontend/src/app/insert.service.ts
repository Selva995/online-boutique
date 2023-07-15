import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http:HttpClient) { }
  url1="http://localhost:8080/insert"
  url2="http://localhost:8080/login"
  url3="http://localhost:8080/update"
  url4="http://localhost:8080/login2"
  url5="http://localhost:8080/verify"
  url6="http://localhost:8080/products"
  url7="http://localhost:8080/laptops"
  url8="http://localhost:8080/deleteL"
  url9="http://localhost:8080/showcart"
  url10="http://localhost:8080/view"
 
  url12="http://localhost:8080/details"
  url13="http://localhost:8080/id"

  insertService(data:any){
    return this.http.post(this.url1,data);
  }
 public loginUserFromRemote(user:User):Observable<object>{
   console.log(user);
    return this.http.post(this.url2,user);
  }
 insertService1(data:any){
    return this.http.post(this.url3,data);
  }
  public loginUserFromRemote1(admin:Admin):Observable<object>{
    console.log(admin);
     return this.http.post(this.url4,admin);
   }
   public loginUserFromRemote2(admin:Admin):Observable<object>{
    console.log(admin);
     return this.http.post(this.url5,admin);
   }
  insertLaptop(data:any){
    return this.http.post(this.url6,data);
   }
   deleteLaptop(data:any){
    return this.http.post(this.url8,data);
   }
   viewLaptops(){
    return this.http.get(this.url7);
   }
   viewUsers(){
    return this.http.get(this.url9);
   }
   viewCustomers(){
    return this.http.get(this.url10);
   }
   
   viewPayment(){
    return this.http.get(this.url12);
   }

   // return this.http.get(this.url13 +"/" +"id"); 
   findDetails(data:any){
    return this.http.post(this.url13,data);
   }
  
   
   /*getUserCount(){
    return this.http.get(this.url7);
     }*/
}
