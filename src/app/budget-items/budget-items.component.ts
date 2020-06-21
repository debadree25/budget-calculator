import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../models/budget_item';

@Component({
  selector: 'app-budget-items',
  templateUrl: './budget-items.component.html',
  styleUrls: ['./budget-items.component.scss']
})
export class BudgetItemsComponent implements OnInit {
  items: BudgetItem[] = [
    {
      description: 'rent',
      amount: 100,
      isIncome: false
    },
    {
      description: 'Salary',
      amount: 3000,
      isIncome: true
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
