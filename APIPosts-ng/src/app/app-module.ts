import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Posts } from './posts/posts';
import { Navbar } from './navbar/navbar';
import { provideHttpClient } from '@angular/common/http';
import { Singlepost } from './singlepost/singlepost';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Posts,
    Navbar,
    Singlepost
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
