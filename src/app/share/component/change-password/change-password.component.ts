import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

  oldPass:string=''
  newPass:string=''
  confirmPass:string=''

   onSubmit(e: Event) {

  }

  ngOnInit(): void {
  }

}
