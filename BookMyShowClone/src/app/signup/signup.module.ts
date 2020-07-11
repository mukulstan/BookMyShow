import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './signup.routing';
import { SignupComponent } from './signup.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from './signup.service';

import {SharedModule} from '../shared/shared.module'
@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,

    SharedModule
  ],
  providers: [
    SignupService
    ],
})
export class SignupModule { }
