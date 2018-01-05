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
    console.log('logged');
    this.loggredIn = true;
  }

  logout() {
    console.log('off');
    this.loggredIn = false;
  }
  constructor() { }

}
