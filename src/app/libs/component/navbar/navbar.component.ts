import { Component, OnInit } from '@angular/core';

import { SpotifyStore } from '../../service/spotify/spotify.store';
import { User } from '../../domain/user/user';
import { SpotifyAuthService } from '../../service/spotify/spotify-auth.service';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoading: boolean = true;
  user: User = {} as User;

  constructor(
    private spotifyStore: SpotifyStore,
    private authService: AuthService,
    private spotifyAuthService: SpotifyAuthService,
  ) {
    if (this.logged) {
      this.spotifyStore.loadUserData().subscribe();
    }
  }

  public ngOnInit(): void {
    if (this.logged) {
      this.spotifyStore.user$.subscribe((user: User) => {
        if (user?.id) {
          this.user = user;
          this.isLoading = false;
        }
      });
    }
  }

  public login(): void {
    this.spotifyAuthService.authorizeSpotify();
  }

  public logout(): void {
    this.authService.logout();
  }

  public get logged(): boolean {
    return this.authService.authenticated;
  }
}
