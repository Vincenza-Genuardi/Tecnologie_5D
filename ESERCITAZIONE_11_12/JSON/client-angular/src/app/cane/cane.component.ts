import { Component } from '@angular/core';
import { Cane } from '../models/Animale.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cane',
  templateUrl: './cane.component.html',
  styleUrls: ['./cane.component.css']
})
export class CaneComponent {
    cani:Cane[]
    constructor(private router:Router) {
      this.cani = this.router.getCurrentNavigation().extras.state as Cane[];
      
    }
}
