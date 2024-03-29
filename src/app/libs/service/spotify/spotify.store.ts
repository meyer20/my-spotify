import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { User, UserInterface } from '../../domain/user/user';
import { SpotifyService } from './spotify.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SpotifyStore {
  private user = new ReplaySubject<User>();
  readonly user$ = this.user.asObservable();

  constructor(private spotifyService: SpotifyService) {}

  public loadUserData(): Observable<void> {
    return this.spotifyService.getUserInfo().pipe(map((user: UserInterface) => {
      this.user.next(new User(user));
    }));
  }
}
