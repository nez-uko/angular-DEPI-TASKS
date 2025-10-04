import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  //  start  reactive form
  loginForm=new FormGroup({
    email :new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.minLength(3) , Validators.required])
  });
  is_Submited=false;

get FormControls(){
  return this.loginForm.controls;
}
handelSubmit(){
 this.is_Submited=true;
 if(this.loginForm.valid){
  console.log(this.loginForm);
  
 }else{
  console.log("invalid");
  
 }
}
//  end reactive form
constructor(public toastr: ToastrService){

}


}

