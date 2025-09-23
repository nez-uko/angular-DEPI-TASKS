import { Component } from '@angular/core';
import { Global } from '../services/global';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
  products: any =[];
  products_2: any =[];
  value='';
 constructor(private service : Global){

 }
 ngOnInit(){
  this.service.getProducts().subscribe({
    next: (res)=>{
       this.products=res.products;
       this.products_2=res.products;
    },
    error :(er)=>{
      console.log(er); 
    },
    complete: ()=>{

    }
  })
 }
 filterProducts(){
  if (this.value === '') {
    this.products = this.products_2;
  } else {
    this.products = this.products_2.filter((product: any) =>
      product.title.toLowerCase().includes(this.value.toLowerCase())
    );
  }}
}
