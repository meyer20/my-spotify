import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, UserInterface } from '../../domain/user/user';
import { Artist, ArtistInterface } from '../../domain/artists/artist';
import { ResponseInterface } from '../../domain/common/response';

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

  public getUserTops(type: 'tracks' | 'artists'): Observable<ResponseInterface<Artist[]>> {
    return this.httpClient.get<ResponseInterface<Artist[]>>(`${this.SPOTIFY_API_URL}/me/top/${type}`)
      .pipe(map((data: ResponseInterface<ArtistInterface[]>) => {
        data.items = data.items.map((item: ArtistInterface) => new Artist(item));
        return data;
      }));
  }
}
