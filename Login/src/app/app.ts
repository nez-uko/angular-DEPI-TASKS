import { Component, signal } from '@angular/core';
import { Global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Login');
  constructor(private global :Global){
  }

  ngOnInit(){
     if(localStorage.getItem('token'))
      this.global.loadProfile();
  }
}
