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
