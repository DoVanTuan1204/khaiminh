import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { LogginComponent } from './component/loggin/loggin.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:LogginComponent
  },
  {
    path:'login',
    component:LogginComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'changePassWord',
    component:ChangePasswordComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
