import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProfile } from './pages/update-profile/update-profile';
import { Login } from './pages/login/login';

const routes: Routes = [
   { path: 'login', component: Login },
  { path: 'profile', component: UpdateProfile },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
