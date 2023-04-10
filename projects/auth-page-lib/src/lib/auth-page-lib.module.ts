import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    SignInComponent
  ]
})
export class AuthPageLibModule { }
