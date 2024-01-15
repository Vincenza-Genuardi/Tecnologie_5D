import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBV0bqUi-UF2thPE3nDnQgfaqijqfuAQRm7NtStAAurFyYoVyineMXHDoWC1ErAcyi6FyPGymwZlVBm7bXYdUQwDDJqpLCrDf_19GDWAZsxgnc5fXRlKQm10JvED7mT5_0gQQciKwi7Ag0UhZ1cwAjVLG8hAcYmJUmi8bWqN6wGlBMXyy24CsVRGPonPjY0euw'
    });
    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }
}
