import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { AddGoalsComponent } from './components/add-goals/add-goals.component';


@NgModule({
  declarations: [
    AddGoalsComponent
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule
  ]
})
export class GoalsModule { }
