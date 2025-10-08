import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Global {
  private apiUrl = 'https://full.faedg.com/public/api/client';

  check= localStorage.getItem('token')? true:false;
   user: any = null;

    model={
      first_name:'',
      last_name:'',
      email:'',
      phone:'',
      password:'',
      confirm_password:''
    }

  constructor(private http:HttpClient){

  }
  
  register(body :any):Observable<any>{
    return this.http.post(`${this.apiUrl}/customer_register` , body);
  }
  logOut(){
    localStorage.removeItem('token');
    this.check=false;
  }

  profile():Observable<any>{
    return this.http.get(`${this.apiUrl}/profile`);
  }
}




/**
 *  private apiUrl = 'https://full.faedg.com/public/api/client';
  currentUser: any = null;

  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) this.currentUser = JSON.parse(savedUser);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/customer_register`, data);
  }

  login (data :any){
    return this.http.post(`${this.apiUrl}/customer_login`, data);
  }

  updateProfile(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update_profile`, data);
  }

  saveUser(user: any) {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (this.currentUser) return this.currentUser;
    const use = localStorage.getItem('user');
    return use ? JSON.parse(use) : null;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
  }
}
 */
