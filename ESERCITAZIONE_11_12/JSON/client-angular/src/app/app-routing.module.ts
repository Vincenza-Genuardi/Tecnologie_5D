import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaneComponent } from './cane/cane.component';
import { GattoComponent } from './gatto/gatto.component';
import { ConiglioComponent } from './coniglio/coniglio.component';
import { PesceComponent } from './pesce/pesce.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cani', component:CaneComponent }, 
  { path: 'gatti', component:GattoComponent }, 
  { path: 'home', component:HomeComponent }, 
  { path: 'conigli', component:ConiglioComponent},
  { path: 'pesci', component:PesceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
