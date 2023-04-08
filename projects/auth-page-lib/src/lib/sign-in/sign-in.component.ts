import { Component, Input } from "@angular/core";
import { FieldModel } from "../models/field.model";


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
}
