import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss']
})
export class BudgetCardComponent implements OnInit {
  @Input() isIncome: boolean;
  @Input() amount: number;
  @Input() description: string;
  @Output() remove: EventEmitter<any>;
  constructor() {
    this.remove = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public removeItem() {
    this.remove.emit('remove');
  }
}
