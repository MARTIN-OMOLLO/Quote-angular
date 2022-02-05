import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGoalsComponent } from './components/add-goals/add-goals.component';
import { GoalFormComponent } from './goal-form/goal-form.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"add",
    pathMatch:"full"
  },
  {
    path:"add",
    component:AddGoalsComponent
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
