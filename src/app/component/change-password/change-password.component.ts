import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

  buttonOptions: any = {
    text: 'Loggin',
    type: 'success',
    onClick: function ()  {


    },
    useSubmitBehavior: true,
  };
   onSubmit(e: Event) {
    e.preventDefault();

    this.router.navigate(['/login-form']);


  }

  ngOnInit(): void {
  }

}
