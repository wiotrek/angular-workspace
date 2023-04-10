import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FieldModel } from "../models/field.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  @Input() title = 'Authentication';

  @Input() fields: FieldModel[] = [
    {
      displayName: 'Username or email',
      codeName: 'username',
      inputType: 'text'
    },
    {
      displayName: 'Password',
      codeName: 'password',
      inputType: 'password'
    }
  ];

  @Input() signInForm: FormGroup = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]
    ]
  });

  @Output() auth = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {}
}
