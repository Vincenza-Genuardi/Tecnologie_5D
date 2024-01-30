import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist-search-result-component',
  templateUrl: './artist-search-result-component.component.html',
  styleUrls: ['./artist-search-result-component.component.css']
})
export class ArtistSearchResultComponentComponent {
  title = 'spotify';
  obsArtist : Observable<Object>;
  ricerca : string;
  results : any;
  tipo:string="artist"
  constructor(public spotify : SpotifyService){
 
  } 


  cerca(ricerca:HTMLInputElement):void{
    if (!ricerca.value) {
      return;
    }
    this.ricerca = ricerca.value;
    this.obsArtist = this.spotify.search(this.ricerca, this.tipo);
    this.obsArtist.subscribe((data) => this.results = data); 
  }
}
