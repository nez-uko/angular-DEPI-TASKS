import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-act-login',
  standalone: false,
  templateUrl: './act-login.html',
  styleUrl: './act-login.css'
})
export class ActLogin {
  form:any;
  loginMsg='';
  constructor(private router : Router , public global: Global){
     this.form=this.global.model;
  }

  onSubmit(loginForm :NgForm){
    if(loginForm.valid){
      this.global.login(this.global.model).subscribe({
        next :(res)=>{
          console.log(res.data);
          this.loginMsg='';
          localStorage.setItem('token', res.data.token);
          this.global.profile().subscribe({

            next: (res)=>{
              this.global.userData=res.data
               this.router.navigateByUrl('/profile')
            }
          })
          
        },
        error:(error)=>{
           this.loginMsg='Email Or Password is Wrong';
        }
      })
    }
  }
}












/**
 * 
  form :any=[];
  constructor(private global :Global ,private toastr:ToastrService ,private router :Router){

  }

   onSubmit() {
    this.global.login(this.form).subscribe({
      next: (res: any) => {
        this.toastr.success(res.message || 'login successfully');
        this.router.navigateByUrl('/Profile');
      },
      error: (err) => {
        console.error('login error', err);
        this.toastr.error(err.error?.message || 'login failed');
      }
    });
  }
 */
