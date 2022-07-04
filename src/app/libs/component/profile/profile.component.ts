import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../service/spotify/spotify.service';
import { User, UserInterface } from '../../domain/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: UserInterface = new User({} as UserInterface);

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getUserInfo().subscribe((data: User) => {
      this.userData = data;
    });
  }

}
