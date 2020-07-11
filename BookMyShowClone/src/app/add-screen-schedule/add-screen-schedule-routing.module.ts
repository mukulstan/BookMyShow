import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddScreenScheduleComponent} from "./add-screen-schedule.component"

const routes: Routes = [
  {path:"" ,component:AddScreenScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddScreenScheduleRoutingModule { }
