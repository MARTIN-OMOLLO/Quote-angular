import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGoalsComponent } from './components/add-goals/add-goals.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"add",
    pathMatch:"full"
  },
  {
    path:"add",
    component:AddGoalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
