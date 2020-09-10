import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieDetailsComponent} from '../movie/movie-details/movie-details.component'

const routes: Routes = [
  {path: "" , component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
