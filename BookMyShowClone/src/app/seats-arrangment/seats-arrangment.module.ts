import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeatsArrangmentComponent} from "./seats-arrangment.component"
import { SeatsArrangmentRoutingModule } from './seats-arrangment-routing.module';


@NgModule({
  declarations: [SeatsArrangmentComponent],
  imports: [
    CommonModule,
    SeatsArrangmentRoutingModule
  ]
})
export class SeatsArrangmentModule { }
