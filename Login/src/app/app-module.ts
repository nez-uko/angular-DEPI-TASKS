import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { Navbar } from './shared/navbar/navbar';
import { UpdateProfile } from './pages/update-profile/update-profile';
import { Login } from './pages/login/login';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Navbar,
    UpdateProfile,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
