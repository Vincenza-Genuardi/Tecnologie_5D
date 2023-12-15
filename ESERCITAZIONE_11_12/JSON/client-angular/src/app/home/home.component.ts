import { Component, OnInit } from '@angular/core';
import { Animale} from '../models/Animale.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pesci: Animale[];
  cani : Animale[];
  conigli : Animale[];
  gatti : Animale[];
  AnimaliUrl='https://3000-vincenzagen-tecnologie5-zicsdom0plo.ws-eu107.gitpod.io/api';
  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {
    this.http.get(this.AnimaliUrl).subscribe(data => {
      this.cani = data['Cani'];
      this.gatti = data['Gatti'];
      this.conigli = data['Conigli'];
      this.pesci = data['Pesci'];
    });
  }


  }


