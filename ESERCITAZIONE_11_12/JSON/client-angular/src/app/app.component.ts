import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animale, Cane, Coniglio, Gatto, Pesce } from './models/Animale.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  animali: Animale;
  oAnimale: Observable<Animale>;
  AnimaliUrl = 'https://3000-vincenzagen-tecnologie5-zicsdom0plo.ws-eu107.gitpod.io/api'; //URL for fetching data
  cani : Cane[];
  gatti : Gatto[]
  conigli : Coniglio[];
  pesci : Pesce[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.AnimaliUrl).subscribe(data => {
      this.cani = data['Cani'];
      this.gatti = data['Gatti'];
      this.conigli = data['Conigli'];
      this.pesci = data['Pesci'];
    });
  }
}
