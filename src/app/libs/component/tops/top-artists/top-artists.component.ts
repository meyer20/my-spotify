import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../service/spotify/spotify.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {
  public isLoading = true;
  public artists: any = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getUserTops('artists').subscribe((artists: any) => {
      console.log('artists', artists);
      this.isLoading = false;
      this.artists = artists.items;
    });
  }

}
