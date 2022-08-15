import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  private readonly SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';

  private authConfig = {
    client_id: '335acf2f77f94d3f978c65999c842285',
    response_type: 'token',
    redirect_uri: 'http://localhost:4200/authorized',
    state: '',
    show_dialog: true,
    scope: [
      'user-read-private',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-top-read'
    ]
  };

  constructor() { }

  public authorizeSpotify() {
    window.location.href = this.SPOTIFY_AUTH_URL + this.buildParamsUrl();
  }

  private buildParamsUrl(): string {
    let params: string[] = [];
    Object.entries(this.authConfig).forEach(([key, value]) => {
      if (typeof(value) === 'object') {
        params.push(`${key}=${(value as string[]).join(' ')}`);
      } else {
        params.push(`${key}=${value}`);
      }
    });

    return '?' + params.join('&');
  }
}
