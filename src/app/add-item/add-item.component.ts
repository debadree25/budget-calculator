import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  amount: number;
  description: string;
  constructor(private state: StateService) { }

  ngOnInit(): void {
  }

  addItem() {
    if (this.amount !== 0) {
      this.state.addItem({
        amount: Math.abs(this.amount),
        description: this.description,
        isIncome: (this.amount > 0)
      });
      this.amount = 0;
      this.description = '';
    }
  }
}
