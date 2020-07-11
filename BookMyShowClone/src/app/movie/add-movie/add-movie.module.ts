import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AddMovieRoutingModule } from './add-movie-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddMovieRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class AddMovieModule { }
