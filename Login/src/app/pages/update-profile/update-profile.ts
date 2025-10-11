import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  standalone: false,
  templateUrl: './update-profile.html',
  styleUrl: './update-profile.css'
})
export class UpdateProfile {
 constructor(private router : Router , public global :Global , private toastr : ToastrService){
  
 }
 ngOnInit(){
      this.global.loadProfile();
 }
 
update() {
    const body = {
      first_name: this.global.userData.customer_first_name,
      last_name: this.global.userData.customer_last_name,
      phone: this.global.userData.customer_phone,
      email: this.global.userData.customer_email
    };

    this.global.UpdateProfile(body).subscribe({
      next: (res) => {
        this.toastr.success('Profile updated successfully ');
        this.global.loadProfile();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Failed to update profile');
      }
    });
  }
}

