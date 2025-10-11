import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Global {
  private apiUrl = 'https://full.faedg.com/public/api/client';

  check= localStorage.getItem('token')? true:false;
 
    model={
      email:'',
      password:'',
    }
    userData:any=null;

  constructor(private http:HttpClient, private router :Router){

  }
  login(body:any):Observable<any>{
     return this.http.post(`${this.apiUrl}/customer_login`, body)
  }
  register(body :any):Observable<any>{
    return this.http.post(`${this.apiUrl}/customer_register` , body);
  }
  logOut(){
    localStorage.removeItem('token');
    this.check=false;
    this.router.navigateByUrl('/actLogin');
  }
   UpdateProfile(body :any):Observable<any>{
     return this.http.put(`${this.apiUrl}/profile/${this.userData.id}`, body)
   }
  profile():Observable<any>{
    return this.http.get(`${this.apiUrl}/profile`);
  }
  loadProfile(){
    this.profile().subscribe({
      next:(res)=> this.userData=res.data
    });
  }
}


