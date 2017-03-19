import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/common/src/facade/async';

@Injectable()

export class Tracker {
  totalUpdated: EventEmitter<number> = new EventEmitter();
  currentTotal: number;

  constructor() {}

  public setTotal(total: number): void {
    this.currentTotal = total;
    this.totalUpdated.emit(this.currentTotal);
  }

  public getTotal(): number {
    return this.currentTotal;
  }
}
