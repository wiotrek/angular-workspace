import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignInComponent
  ]
})
export class AuthPageLibModule { }
