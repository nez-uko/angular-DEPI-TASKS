import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  constructor(public global:Global, private toastr:ToastrService,private router :Router){ 
  }
  
  handelSubmit(registerForm : NgForm){
    if(registerForm.valid){
      this.global.register(this.global.model).subscribe({
        next:(res:any)=>{
            this.toastr.success('register Successfully');
            this.global.model=res.data;
            localStorage.setItem('token' , res.data.token);
            this.global.check=true;
           
            console.log(this.global.model,   res.data);
            
        },
        error :(rej:any)=>{
           this.toastr.error('fail register');
        }
      })
    }
  }
}

