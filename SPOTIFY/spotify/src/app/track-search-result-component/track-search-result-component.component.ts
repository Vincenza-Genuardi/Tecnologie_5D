import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-track-search-result-component',
  templateUrl: './track-search-result-component.component.html',
  styleUrls: ['./track-search-result-component.component.css']
})
export class TrackSearchResultComponentComponent {
  title = 'spotify';
  obsTrack : Observable<Object>;
  ricerca : string;
  results : any;
  tipo: string = "track";
  constructor(public spotify : SpotifyService){
 
  } 


  cerca(ricerca:HTMLInputElement):void{
    if (!ricerca.value) {
      return;
    }
    this.ricerca = ricerca.value;
    this.obsTrack = this.spotify.search(this.ricerca, this.tipo);
    this.obsTrack.subscribe((data) => this.results = data); 
  }
}
