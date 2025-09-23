import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Posts } from './posts/posts';
import { Singlepost } from './singlepost/singlepost';

const routes: Routes = [
  {path:'products', component:Posts},
  {path:'products/:productId' , component:Singlepost}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
