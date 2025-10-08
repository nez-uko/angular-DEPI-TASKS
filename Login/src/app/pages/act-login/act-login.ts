import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-act-login',
  standalone: false,
  templateUrl: './act-login.html',
  styleUrl: './act-login.css'
})
export class ActLogin {

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
