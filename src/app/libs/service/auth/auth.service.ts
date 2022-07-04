import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authToken: string = '';
  public readonly authToken$ = new BehaviorSubject<string>(this.authToken);

  constructor() { }

  public set token(token: string) {
    this.authToken = token;
    this.authToken$.next(this.authToken);
  }

  public get token(): string {
    return this.authToken;
  }

  public clear(): void {
    this.token = '';
  }
}
