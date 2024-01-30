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
    } catch (error) {
      console.error('Error getting token:', error);
    }
  }

 

  search(query: string, type:string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }


} 
