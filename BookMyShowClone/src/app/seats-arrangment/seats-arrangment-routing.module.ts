import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeatsArrangmentComponent} from "./seats-arrangment.component"

const routes: Routes = [
  {path: "" , component: SeatsArrangmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatsArrangmentRoutingModule { }
