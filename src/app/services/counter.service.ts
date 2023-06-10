import { Injectable } from '@angular/core';

import { Counter } from '../interfaces/counter.interface';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  seventhOfJune = new Date(2024, 5, 7, 7, 30).getTime();

  cnt: Counter = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    daysText: '',
    status: 3,
  };

  constructor() {
    this.countdown();
  }

  countdown() {
    // get today's date
    const today = new Date().getTime();
    const month = new Date().getMonth();
    this.cnt.daysText = 'dias';

    // get the difference
    let diff;
    let mult = 1000;
    diff = this.seventhOfJune - today;

    this.cnt.days = Math.floor(diff / (mult * 86400));
    this.cnt.hours = Math.floor((diff % (mult * 86400)) / (mult * 3600));
    this.cnt.minutes = Math.floor((diff % (mult * 3600)) / (mult * 60));
    this.cnt.seconds = Math.floor((diff % (mult * 60)) / mult);

    if (this.cnt.days == 1) {
      this.cnt.daysText = 'dia';
    }

    if (month <= 3) {
      this.cnt.status = 2;
    } else {
      this.cnt.status = diff <= 0 ? 1 : 0;
    }
  }
}
