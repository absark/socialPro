import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { MaterialModule } from 'src/app/app.material.componet';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
