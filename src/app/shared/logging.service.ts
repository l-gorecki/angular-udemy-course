import { Injectable } from '@angular/core';

export class LoggingService {
  logStatusChange(status: string) {
    console.log('Account status changed, new status: ' + status);
  }
  constructor() { console.log('service crated'); }

}
