import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { ActLogin } from './pages/act-login/act-login';
import { UpdateProfile } from './pages/update-profile/update-profile';


const routes: Routes = [
  {path:'register' , component:Register},
  {path:'actLogin' , component:ActLogin},
  {path:'profile' , component:UpdateProfile}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
