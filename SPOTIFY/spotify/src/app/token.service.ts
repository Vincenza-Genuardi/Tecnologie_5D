import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private clientId = '75f8a13f9cb141f0bfe9b23be828e216';
  private clientSecret = '578d3f90fad44eefbd9b50569b950fbc';
  private spotifyApiUrl = 'https://accounts.spotify.com/api/token';

  constructor() {
    this.getAccessToken();
  }

  async getAccessToken() {
    const params = {
      grant_type: 'client_credentials',
      client_id: this.clientId,
      client_secret: this.clientSecret,
    };

    const payload = new URLSearchParams(params);

    const response = await fetch(this.spotifyApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload,
    });

    const data = await response.json();

    if (data.access_token) {
      localStorage.setItem('access_token', data.access_token);
      console.log('Access Token:', data.access_token);
    } else {
      console.error('Errore durante l\'ottenimento del token.');
    }
  }

  static getToken() {
    return localStorage.getItem('access_token');
  }
}