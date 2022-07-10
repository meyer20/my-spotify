import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-spotify-auth-component',
  templateUrl: './spotify-auth-component.component.html',
  styleUrls: ['./spotify-auth-component.component.scss']
})
export class SpotifyAuthComponent implements OnInit {

  constructor(private route: Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('inits')
    this.route.navigate(['/me/profile'], { relativeTo: this._activatedRoute });
  }
}
