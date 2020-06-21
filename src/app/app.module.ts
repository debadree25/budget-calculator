import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BudgetItemsComponent } from './budget-items/budget-items.component';
import { BudgetCardComponent } from './budget-card/budget-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddItemComponent,
    BudgetItemsComponent,
    BudgetCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
