import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gatto } from '../models/Animale.model';
@Component({
  selector: 'app-gatto',
  templateUrl: './gatto.component.html',
  styleUrls: ['./gatto.component.css']
})
export class GattoComponent {
  gatti:Gatto[]
  constructor(private router:Router) {
    this.gatti = this.router.getCurrentNavigation().extras.state as Gatto[];
  }
}
