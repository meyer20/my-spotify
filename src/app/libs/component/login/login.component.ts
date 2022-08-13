import { Component } from '@angular/core';

import { SpotifyAuthService } from '../../service/spotify/spotify-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private spotifyAuthService: SpotifyAuthService) {}

  public spotifyLogin(): void {
    this.spotifyAuthService.authorizeSpotify();
  }

}
