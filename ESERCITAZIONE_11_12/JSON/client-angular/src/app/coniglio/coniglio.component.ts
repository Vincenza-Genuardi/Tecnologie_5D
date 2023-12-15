import { Component } from '@angular/core';
import { Coniglio } from '../models/Animale.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coniglio',
  templateUrl: './coniglio.component.html',
  styleUrls: ['./coniglio.component.css']
})
export class ConiglioComponent {
  conigli:Coniglio[]
  constructor(private router:Router) {
    this.conigli = this.router.getCurrentNavigation().extras.state as Coniglio[];
  }
}
