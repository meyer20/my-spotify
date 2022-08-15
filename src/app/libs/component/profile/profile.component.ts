import { Component, OnInit } from '@angular/core';

import { User, UserInterface } from '../../domain/user/user';
import { SpotifyStore } from '../../service/spotify/spotify.store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLoading: boolean = true;
  user: UserInterface = {} as User;

  constructor(private spotifyStore: SpotifyStore) {}

  ngOnInit(): void {
    this.spotifyStore.user$.subscribe((user: User) => {
      if (user?.id) {
        this.user = user;
        this.isLoading = false;
      }
      console.log(user);
    });
  }

}
