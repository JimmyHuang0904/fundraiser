import { Component } from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';
import {Tracker} from "../../app/Tracker";


@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html'
})

export class GoalPage {
	private goal: number;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private tracker: Tracker) {
  }

  public addPopup() {
    let prompt = this.alertCtrl.create({
      title: 'Add new Goal',
      message: 'Enter the amount:',
      inputs: [{ name: 'Amount',},],
      buttons: [{ text: 'Cancel', },
        {
          text: 'Save',
          handler: data => {
            this.goal = Number(data.Amount);
            this.tracker.setGoal(Number(data.Amount));
          }
        }
      ]
    });
    prompt.present();
  }

}
