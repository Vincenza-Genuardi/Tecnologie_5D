import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { CaneComponent } from './cane/cane.component';
import { GattoComponent } from './gatto/gatto.component';
import { ConiglioComponent } from './coniglio/coniglio.component';
import { PesceComponent } from './pesce/pesce.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CaneComponent,
    GattoComponent,
    ConiglioComponent,
    PesceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
