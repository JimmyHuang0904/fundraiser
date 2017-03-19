export class Traker {
  currentTotal: number;

  constructor() {}

  public setTotal(total: number): void {
    this.currentTotal = total;
  }

  public getTotal(): number {
    return this.currentTotal;
  }
}
