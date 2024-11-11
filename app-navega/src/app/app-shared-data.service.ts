import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSharedDataService {

  private login: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  login$ = this.login.asObservable();

  setLogin(val: boolean) {
    this.login.next(val);
  }
}
