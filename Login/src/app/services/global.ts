import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Global {
  private apiUrl = 'https://full.faedg.com/public/api/client';
  currentUser: any = null;

  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) this.currentUser = JSON.parse(savedUser);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/customer_register`, data);
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
