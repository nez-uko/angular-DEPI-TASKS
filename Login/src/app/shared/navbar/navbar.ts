import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
   user: any = null;
  private handler = (e: any) => {
    this.user = e.detail;
  };

  constructor(private global: Global, private router: Router) {}

  ngOnInit() {
    this.user = this.global.getUser();
  }

  goProfile(){
   this.router.navigateByUrl('/profile');
  }

  logout(){
   this.global.logout();
   this.user=null;
   this.router.navigateByUrl('/');
  }
}
