import { Component } from '@angular/core';
import { Global } from '../services/global';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlepost',
  standalone: false,
  templateUrl: './singlepost.html',
  styleUrl: './singlepost.css'
})
export class Singlepost {
  product :any ;
 constructor(private service: Global , private activatedR : ActivatedRoute){

 }
 ngOnInit(){
  let id=this.activatedR.snapshot.paramMap.get('productId');
  this.service.getSingleProduct(id).subscribe({
    next: (res)=>{
      console.log(res);
       this.product=res; 
    },
  });
}
}
