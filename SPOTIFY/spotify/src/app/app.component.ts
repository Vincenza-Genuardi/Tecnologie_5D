import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify';
  obsTrack : Observable<Object>;
  ricerca : string;
  results : any;
  constructor(public spotify : SpotifyService){
 
  } 


  cerca(ricerca:HTMLInputElement):void{
    if (!ricerca.value) {
      return;
    }
    this.ricerca = ricerca.value;
    this.obsTrack = this.spotify.searchTrack(this.ricerca);
    this.obsTrack.subscribe((data) => this.results = data); 
  }

  }



