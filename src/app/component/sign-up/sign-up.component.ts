import { Component, OnInit } from '@angular/core';
import { ValidationCallbackData } from 'devextreme/ui/validation_rules';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formData : any = {};

  buttonOptions: any = {
    text: 'Sign Up',
    type: 'success',
    onClick: function ()  {

    },
    useSubmitBehavior: true,
  };


  constructor() { }



  confirmPassword = (e: ValidationCallbackData) => {
    return e.value === this.formData.password;
  }

  ngOnInit(): void {
  }

}
