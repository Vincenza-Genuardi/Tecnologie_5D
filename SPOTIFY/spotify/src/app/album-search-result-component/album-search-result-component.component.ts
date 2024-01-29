import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album-search-result-component',
  templateUrl: './album-search-result-component.component.html',
  styleUrls: ['./album-search-result-component.component.css']
})
export class AlbumSearchResultComponentComponent {
  title = 'spotify';
  obsAlbulm : Observable<Object>;
  ricerca : string;
  results : any;
  constructor(public spotify : SpotifyService){
 
  } 


  cerca(ricerca:HTMLInputElement):void{
    if (!ricerca.value) {
      return;
    }
    this.ricerca = ricerca.value;
    this.obsAlbulm = this.spotify.searchAlbum(this.ricerca);
    this.obsAlbulm.subscribe((data) => this.results = data); 
  }
}
