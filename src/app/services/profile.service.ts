import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
public navbarFlag=false;
 private _currentUser: any;
  public get currentUser(): any {
    return this._currentUser;
  }
  public set currentUser(value: any) {
    this._currentUser = value;
  }
  constructor() { }

}
