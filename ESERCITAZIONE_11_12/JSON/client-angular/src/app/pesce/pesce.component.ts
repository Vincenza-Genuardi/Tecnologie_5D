import { Component } from '@angular/core';
import { Pesce } from '../models/Animale.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pesce',
  templateUrl: './pesce.component.html',
  styleUrls: ['./pesce.component.css']
})
export class PesceComponent {
  pesci:Pesce[]
  constructor(private router:Router) {
    this.pesci = this.router.getCurrentNavigation().extras.state as Pesce[];
  }
}
