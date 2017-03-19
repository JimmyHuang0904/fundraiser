import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/common/src/facade/async';

@Injectable()

export class Tracker {
  totalUpdated: EventEmitter<number> = new EventEmitter();
  goalUpdated: EventEmitter<number> = new EventEmitter();
  percentageUpdated: EventEmitter<number> = new EventEmitter();
  currentTotal: number;
  currentGoal: number;

  constructor() {}

  public setTotal(total: number): void {
    this.currentTotal = total;
    this.totalUpdated.emit(this.currentTotal);
    this.percentageUpdated.emit(this.getPercentage());
  }

  public setGoal(goal: number): void {
    this.goalUpdated.emit(goal);
    this.percentageUpdated.emit(this.getPercentage());
  }

  public getPercentage(): number {
    return this.currentTotal/ this.currentGoal;
  }

}
