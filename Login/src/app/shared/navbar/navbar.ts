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
  constructor(public global:Global){

  }
  
}
