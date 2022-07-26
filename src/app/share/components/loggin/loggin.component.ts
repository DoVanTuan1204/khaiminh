import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {
  loading=true;




public employee : object = {
   username :'a',
    password :'a'
}
    tk1 = 'aa@gmail.com'
    mk1= 'aa'
    buttonOptions: any = {
      text: 'Loggin',
      type: 'success',
      onClick: function ()  {


      },
      useSubmitBehavior: true,
    };

  constructor() { }

  ngOnInit(): void {


  }
}
