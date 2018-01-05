import { Injectable } from '@angular/core';
import { setTimeout } from 'timers';
import { resolve } from 'q';

@Injectable()
export class AuthService {
  loggredIn = false;

  isAuthenticated() {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggredIn);
      }, 800);
    });
    return prom;
  }

  login() {
    this.loggredIn = true;
  }

  logout() {
    this.loggredIn = false;
  }
  constructor() { }

}
