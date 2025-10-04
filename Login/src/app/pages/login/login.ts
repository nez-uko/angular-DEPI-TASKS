import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  form: any = {};

  constructor(private global: Global, private toastr: ToastrService, private router: Router) {}

  onSubmit() {
    this.global.register(this.form).subscribe({
      next: (res: any) => {
        this.toastr.success(res.message || 'Registered successfully');
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        console.error('register error', err);
        this.toastr.error(err.error?.message || 'Registration failed');
      }
    });
  }
}
