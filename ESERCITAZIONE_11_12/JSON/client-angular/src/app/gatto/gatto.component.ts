import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Animale } from '../models/Animale.model';
@Component({
  selector: 'app-gatto',
  templateUrl: './gatto.component.html',
  styleUrls: ['./gatto.component.css']
})
export class GattoComponent {
  gatti:Animale[]
  constructor(private router:Router) {
    this.gatti = this.router.getCurrentNavigation().extras.state as Animale[];
  }
}
