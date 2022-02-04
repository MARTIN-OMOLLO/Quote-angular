import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"goals",
    pathMatch:"full"
  },
  {
    path:"goals",
    loadChildren:() => import('./modules/goals/goals.module').then(m => m.GoalsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
