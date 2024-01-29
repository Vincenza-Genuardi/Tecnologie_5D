import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-genre-search-result-component',
  templateUrl: './genre-search-result-component.component.html',
  styleUrls: ['./genre-search-result-component.component.css']
})
export class GenreSearchResultComponentComponent {
  title = 'spotify';
  obsGenre : Observable<Object>;
  ricerca : string;
  results : any;
  constructor(public spotify : SpotifyService){
 
  } 


  cerca(ricerca:HTMLInputElement):void{
    if (!ricerca.value) {
      return;
    }
    this.ricerca = ricerca.value;
    this.obsGenre = this.spotify.searchGenre(this.ricerca);
    this.obsGenre.subscribe((data) => this.results = data); 
  }
}
