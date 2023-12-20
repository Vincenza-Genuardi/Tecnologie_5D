import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animale} from './models/Animale.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  AnimaliUrl = 'https://3000-vincenzagen-tecnologie5-1z59jstplkv.ws-eu107.gitpod.io/api'; //URL for fetching data
  cani : Animale[];
  gatti : Animale[]
  conigli : Animale[];
  pesci : Animale[];

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
