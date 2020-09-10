import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddScreenComponent } from './add-screen/add-screen.component';
import {AddScreenScheduleComponent} from './add-screen-schedule/add-screen-schedule.component'
import {AddMovieComponent} from './movie/add-movie/add-movie.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SeatsArrangmentComponent } from './seats-arrangment/seats-arrangment.component';

import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddScreenComponent,
    AddMovieComponent,
    AddScreenScheduleComponent,
    SeatsArrangmentComponent,
    MovieDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule 
    


  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
