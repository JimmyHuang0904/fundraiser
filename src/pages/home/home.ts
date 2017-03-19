import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Tracker } from '../../app/Tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public currentTotal: number = 0;


  constructor(public navCtrl: NavController, public tracker: Tracker) {

  }

  private add() {
    this.currentTotal += 10;
  }  

  private subtract() {
    this.currentTotal -= 10;
  	}  

}
