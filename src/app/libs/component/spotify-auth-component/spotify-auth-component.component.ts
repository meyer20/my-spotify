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
    this.route.navigate(['/me'], { relativeTo: this._activatedRoute });
  }
}
