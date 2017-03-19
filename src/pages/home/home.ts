import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Tracker } from '../../app/Tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public currentTotal: number = 0;
	public goal: number = 0;
	public percentage: number = 0;

  constructor(public navCtrl: NavController, public tracker: Tracker) {
  }

  ngOnInit() {
    this.tracker.totalUpdated.subscribe(
      (total) => {
        this.currentTotal= total;
      }
    );
    this.tracker.goalUpdated.subscribe(
      (goal) => {
        this.goal = goal;
      }
    );
    this.tracker.percentageUpdated.subscribe(
      (percent) => {
        this.percentage = percent;
      }
    );
  }

}
