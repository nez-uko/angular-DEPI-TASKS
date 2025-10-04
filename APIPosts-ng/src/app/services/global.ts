import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Global {
   constructor(private http: HttpClient){
    // console.log(`HTTPS IS`, http); 
  }
  getProducts():Observable<any>{
    //return obsarvable  
    // console.log(this.http.get("https://dummyjson.com/products"));
    
    return this.http.get("https://dummyjson.com/products");
  }
  getSingleProduct(id : any){
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
