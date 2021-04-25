import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { MovieRoutingModule } from './movie-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {MovieReducer} from '../reducers/movie.reducers';
import {MovieEffects} from '../effects/movie.effects'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovieRoutingModule,
    AngularMaterialModule,
    StoreModule.forRoot({post:MovieReducer}, {}), 
    EffectsModule.forRoot([MovieEffects])     

  ],
  
})

export class MovieModule { }
