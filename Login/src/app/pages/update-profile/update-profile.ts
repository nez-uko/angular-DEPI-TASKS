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
 
 onSave(){

 }
}


/**
 *  user: any = null;

  constructor(private global: Global, private toastr: ToastrService) {}

  ngOnInit() {
    this.user = this.global.getUser();
  }

  onSave() {
    this.global.updateProfile(this.user).subscribe({
      next: (res: any) => {
        this.global.saveUser(res.data);
        this.toastr.success(res.message || 'Profile updated!');
      },
      error: (err) => {
        console.error('update error', err);
        this.toastr.error(err.error?.message || 'Update failed');
      }
    });
  }
 */
