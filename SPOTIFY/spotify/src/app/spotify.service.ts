import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private token: any;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.init();
  }

  private async init() {
    try {
      this.token = await TokenService.getToken();
      console.log(this.token);
      //window.location.href = 'http://localhost:4200'; 
    } catch (error) {
      console.error('Error getting token:', error);
    }
  }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }

  searchGenre(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=genre`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }

  searchAlbum(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=album`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }


  searchArtist(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }

} 
