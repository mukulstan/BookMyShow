import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage.component';
import {MovieDetailsComponent} from '../movie/movie-details/movie-details.component'
const routes: Routes = [
  {path:"",component:HomepageComponent },
  // {path: "movie/details/:id" , component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
