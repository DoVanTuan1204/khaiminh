import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  loading = false;
  formData: any = {};



  constructor(private authService: AuthService, private router: Router) { }


  async onSubmit(e: Event) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;

    const result = await this.authService.logIn(email, password);
    if (!result.isOk) {
      this.loading = false;
      notify(result.message, 'error', 2000);

    }
    this.router.navigate(['/homePage']);
  }
  onCreateAccountClick = () => {
    this.router.navigate(['/signup']);
  }



  public username1:any =''
  password1:string=''

public employee : any = {
   username :'a',
    password :'a'
}
  handleLoggin(){

    if(this.username1 === this.employee.username && this.password1 === this.employee.password){
      alert("dang nhap thanh cong");
      this.router.navigate(['/homePage']);
    }
    else
      if(this.username1!==this.employee.username1 || this.password1 !==this.employee.password){
          alert('xin nhap lai tk hoac mat khau')
      }

  }

  ngOnInit(): void {




  }
}
