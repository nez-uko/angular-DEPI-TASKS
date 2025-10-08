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
    if(localStorage.getItem('token'))
      this.global.profile().subscribe({
        next:(res:any)=>{
          this.global.model=res.data;
           this.global.user=res.data.first_name;
        },
        error:(rej)=>{
          console.log(rej)
        }
      })

  }
}
