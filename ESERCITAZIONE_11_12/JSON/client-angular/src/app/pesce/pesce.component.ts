import { Component } from '@angular/core';
import { Animale } from '../models/Animale.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pesce',
  templateUrl: './pesce.component.html',
  styleUrls: ['./pesce.component.css']
})
export class PesceComponent {
  pesci:Animale[]
  constructor(private router:Router) {
    this.pesci = this.router.getCurrentNavigation().extras.state as Animale[];
  }
}
