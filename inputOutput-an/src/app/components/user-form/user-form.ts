import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {
 @Output () userData = new EventEmitter;
 data ={
  username:null,
  useremail:null
 }
 handelClick(){
  const user={
    username:this.data.username,
    useremail:this.data.useremail
  }
  this.userData.emit(user);
 }
}
