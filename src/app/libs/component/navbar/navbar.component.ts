import { Component, OnInit } from '@angular/core';
import { SpotifyStore } from '../../service/spotify/spotify.store';
import { User } from '../../domain/user/user';
import { TokenService } from '../../service/token/token.service';
import { Router } from '@angular/router';
import { SpotifyAuthService } from '../../service/spotify/spotify-auth.service';

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
    private tokenService: TokenService,
    private spotifyAuthService: SpotifyAuthService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.spotifyStore.user$.subscribe((user: User) => {
      if (user?.id) {
        this.user = user;
        this.isLoading = false;
      }
    });
  }

  public login(): void {
    this.spotifyAuthService.authorizeSpotify();
  }

  public logout(): void {
    this.tokenService.deleteToken();
    this.router.navigate([''])
  }

  public get logged(): boolean {
    return this.tokenService.tokenExist();
  }

}
