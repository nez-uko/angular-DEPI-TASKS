import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { Login } from './login/login';
import { Navbar } from './shared/navbar/navbar';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Login,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
