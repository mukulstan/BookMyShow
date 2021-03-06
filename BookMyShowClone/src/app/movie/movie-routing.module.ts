import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieDetailsComponent} from '../movie/movie-details/movie-details.component'
// import {SeatsArrangmentComponent} from '../seats-arrangment/seats-arrangment.component'
import {MovieScheduleStatsComponent} from "./movie-schedule-stats/movie-schedule-stats.component"

const routes: Routes = [
  {path: "schedule" , component: MovieScheduleStatsComponent },
  {path: "details/:id" , component: MovieDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
