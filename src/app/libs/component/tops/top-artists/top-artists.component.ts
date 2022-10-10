import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../service/spotify/spotify.service';
import { ResponseInterface } from '../../../domain/common/response';
import { Artist } from '../../../domain/artists/artist';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {
  public isLoading = true;
  public artists: Artist[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getUserTops('artists')
      .subscribe((artists: ResponseInterface<Artist[]>) => {
        this.isLoading = false;
        this.artists = artists.items;
      });
  }
}
