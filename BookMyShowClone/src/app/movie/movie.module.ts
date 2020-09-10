import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { MovieRoutingModule } from './movie-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovieRoutingModule,
    AngularMaterialModule
  ]
})
export class MovieModule { }
