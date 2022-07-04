import { Component } from '@angular/core';
import { SpotifyAuthService } from '../../service/spotify/spotify-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private spotifyAuthService: SpotifyAuthService) {}

  spotifyLogin(): void {
    this.spotifyAuthService.authorizeSpotify();
  }

}
