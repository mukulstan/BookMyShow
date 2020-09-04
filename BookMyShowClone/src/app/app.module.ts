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

import { SeatsArrangmentComponent } from './seats-arrangment/seats-arrangment.component';


@NgModule({
  declarations: [
    AppComponent,
    AddScreenComponent,
    AddMovieComponent,
    AddScreenScheduleComponent,
    SeatsArrangmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule 
    


  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
