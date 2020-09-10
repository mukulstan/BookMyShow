import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AddScreenRoutingModule } from './add-screen-routing.module';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AddScreenRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class AddScreenModule { }
