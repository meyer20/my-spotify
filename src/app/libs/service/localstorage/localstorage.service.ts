import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setByKey(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getByKey(key: string): string | null {
    return localStorage.getItem(key);
  }

  public removeByKey(key: string): any {
    localStorage.removeItem(key);
  }
}
