import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './share/component/change-password/change-password.component';
import { LogginComponent } from './share/component/loggin/loggin.component';
import { SignUpComponent } from './share/component/sign-up/sign-up.component';
import { ClientComponent } from './views/client/client.component';
import { ProjectComponent } from './views/project/project.component';
import { UserComponent } from './views/user/user.component';
import { CostComponent } from './views/cost/cost.component';
import { HomePageComponent } from './share/component/home-page/home-page.component';
import { AuthService } from './share/services/auth.service';

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
  },
  {
    path:'client',
    component:ClientComponent
  },
  {
    path:'cost',
    component:CostComponent
  },
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'homePage',
    component:HomePageComponent
  },
  {
    path:'**',
    component:HomePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
