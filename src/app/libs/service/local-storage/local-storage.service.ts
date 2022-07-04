import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setDataByKey(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getDataByKey(key: string): string | null {
    return localStorage.getItem(key);
  }

  public removeDataByKey(key: string): any {
    localStorage.removeItem(key);
  }
}
