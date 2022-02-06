import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as addGoalsComponent from './home/martin/Documents/Quotes/src/app/modules/goals/goal-form/goal-form.component';
import { GoalFormComponent } from './goal-form/goal-form.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"add",
    pathMatch:"full"
  },
  {
    path:"add",
    component:addGoalsComponent.AddGoalsComponent
  },
  {
    path:"add-goal",
    component:GoalFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
