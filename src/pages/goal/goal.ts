import { Component } from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';
import {Tracker} from '../../app/Tracker';

export interface goal {
  amount: number;
  name: string;
  date: Date;
}


@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html'
})

export class GoalPage {
	private goal: number = 0;
  private goals: goal[] = [];
  private total: number = 0;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public tracker : Tracker) {
  }

  public addPopup() {
    let prompt = this.alertCtrl.create({
      title: 'Add new Goal',
      message: 'Enter the goal name followed by the amount:',
      inputs: [{ name: 'goalname',},
               { name: 'Amount'},],
      buttons: [{ text: 'Cancel', },
        {
          text: 'Save',
          handler: data => {
            this.add(Number(data.Amount), data.goalname);
          }
        }
      ]
    });
    prompt.present();
  }

  public getTotal() {
    return this.total;
  }

  private add(amount: number, name: string) {
    this.goals.push({amount: amount, name: name, date: new Date()});
    this.total += amount;
    this.tracker.setTotal(this.total);
  }
}
