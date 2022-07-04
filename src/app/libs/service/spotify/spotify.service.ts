import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, UserInterface } from '../../domain/user/user';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private readonly SPOTIFY_API_URL = 'https://api.spotify.com/v1';

  constructor(private httpClient: HttpClient) { }

  public getUserInfo(): Observable<User> {
    return this.httpClient.get<User>(`${this.SPOTIFY_API_URL}/me`).pipe(map((data: UserInterface) => {
      return new User(data);
    }));
  }
}
