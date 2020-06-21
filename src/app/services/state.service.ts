import { Injectable } from '@angular/core';
import { BudgetItem } from '../models/budget_item';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private incomeItems: BudgetItem[];
  private expendItems: BudgetItem[];
  private netAmount: number;
  constructor() {
    this.incomeItems = [];
    this.expendItems = [];
    this.netAmount = 0;
  }

  public addItem(item: BudgetItem) {
    if (item.isIncome) {
      this.incomeItems.push(item);
      this.netAmount += item.amount;
    }
    else {
      this.expendItems.push(item);
      this.netAmount -= item.amount;
    }
  }

  public removeItem(i: number, isIncome: boolean) {
    if (isIncome) {
      this.netAmount -= this.incomeItems[i].amount;
      this.incomeItems.splice(i, 1);
    }
    else {
      this.netAmount += this.expendItems[i].amount;
      this.expendItems.splice(i, 1);
    }
  }

  get income() {
    return this.incomeItems;
  }

  get expenditure() {
    return this.expendItems;
  }

  get amount() {
    return this.netAmount;
  }
}
