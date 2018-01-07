import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { setTimeout } from 'timers';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSub: Subscription;
  obsSub: Subscription;
  constructor() { }

  ngOnInit() {
    const numberObs = Observable.interval(1000)
      .map(
        (data: number) => data * 2
      );
    this.numberObsSub = numberObs.subscribe(
      (number: number) => { console.log(number); }
    );
    const obs = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('1st package');
      }, 2000);
      setTimeout(() => {
        observer.next('2nd package');
      }, 4000);
      setTimeout(() => {
        // observer.error('error package');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('3rd package');
      }, 6000);
    });

    this.obsSub = obs.subscribe(
      (data: string) => {console.log(data); },
      (error: string) => {console.error(error); },
      () => { console.info('completed'); }
    );
  }

  ngOnDestroy() {
    this.obsSub.unsubscribe();
    this.numberObsSub.unsubscribe();
  }

}
