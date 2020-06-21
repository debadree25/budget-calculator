import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../models/budget_item';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-budget-items',
  templateUrl: './budget-items.component.html',
  styleUrls: ['./budget-items.component.scss']
})
export class BudgetItemsComponent implements OnInit {
  constructor(public state: StateService) { }

  ngOnInit(): void {
  }
}
