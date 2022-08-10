import { Component, OnInit } from '@angular/core';
import { SpotifyStore } from '../../service/spotify/spotify.store';
import { User } from '../../domain/user/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoading: boolean = true;
  user: User = {} as User;

  constructor(private spotifyStore: SpotifyStore) { }

  ngOnInit(): void {
    this.spotifyStore.user$.subscribe((user: User) => {
      if (user?.id) {
        this.user = user;
        this.isLoading = false;
      }
    });
  }

}
