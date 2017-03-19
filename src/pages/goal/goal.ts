import { Component } from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';


@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html'
})

export class GoalPage {
	private goal: number = 0;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
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
          }
        }
      ]
    });
    prompt.present();
  }

}
