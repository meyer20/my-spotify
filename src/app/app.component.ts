import { Component } from '@angular/core';
import {SpotifyAuthService} from './libs/service/spotify/spotify-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-spotify';

  constructor(private spotifyAuthService: SpotifyAuthService) {}

  spotifyLogin(): void {
    this.spotifyAuthService.authorizeSpotify();
  }
}
