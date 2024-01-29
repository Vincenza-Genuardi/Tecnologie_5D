import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackSearchResultComponentComponent } from './track-search-result-component/track-search-result-component.component';
import { GenreSearchResultComponentComponent } from './genre-search-result-component/genre-search-result-component.component';
import { AlbumSearchResultComponentComponent } from './album-search-result-component/album-search-result-component.component';
import { ArtistSearchResultComponentComponent } from './artist-search-result-component/artist-search-result-component.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}, 
  { path: 'searchByTrack', component: TrackSearchResultComponentComponent}, 
  { path: 'searchByGenre', component: GenreSearchResultComponentComponent }, 
  { path: 'searchByArtist', component: ArtistSearchResultComponentComponent }, 
  { path: 'searchByAlbum', component: AlbumSearchResultComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
