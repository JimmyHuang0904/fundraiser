import {Injectable} from '@angular/core';

@Injectable()

export class Tracker {
  currentTotal: number;

  constructor() {}

  public setTotal(total: number): void {
    this.currentTotal = total;
  }

  public getTotal(): number {
    return this.currentTotal;
  }
}
