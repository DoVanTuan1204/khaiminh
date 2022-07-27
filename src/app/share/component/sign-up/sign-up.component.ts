import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ValidationCallbackData } from 'devextreme/ui/validation_rules';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formData : any = {};
  createUserName:string=''
  createPassWord:string=''
  createConfirmPassWord:string=''

  constructor() { }


  handleCreateACC(){
    alert('Tạo mới tài khoản thành công');
  }


  ngOnInit(): void {
  }

}
