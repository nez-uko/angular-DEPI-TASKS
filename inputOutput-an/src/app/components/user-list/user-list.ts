import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
 users : any =[];
 handelEvent(e : any){
    this.users.push(e);
    console.log(this.users);
    
 }
 removeUser(index :number){
  this.users.splice(index, 1);
 }
}
