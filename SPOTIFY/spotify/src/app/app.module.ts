import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenreSearchResultComponentComponent } from './genre-search-result-component/genre-search-result-component.component';
import { AlbumSearchResultComponentComponent } from './album-search-result-component/album-search-result-component.component';
import { TrackSearchResultComponentComponent } from './track-search-result-component/track-search-result-component.component';
import { ArtistSearchResultComponentComponent } from './artist-search-result-component/artist-search-result-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenreSearchResultComponentComponent,
    AlbumSearchResultComponentComponent,
    ArtistSearchResultComponentComponent,
    TrackSearchResultComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
