import { Component } from '@angular/core';
import { Animale } from '../models/Animale.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coniglio',
  templateUrl: './coniglio.component.html',
  styleUrls: ['./coniglio.component.css']
})
export class ConiglioComponent {
  conigli:Animale[]
  constructor(private router:Router) {
    this.conigli = this.router.getCurrentNavigation().extras.state as Animale[];
  }
}
