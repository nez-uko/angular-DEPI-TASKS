import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UserList } from './components/user-list/user-list';
import { UserForm } from './components/user-form/user-form';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    UserList,
    UserForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
