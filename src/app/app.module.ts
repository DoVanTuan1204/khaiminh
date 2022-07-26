import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './component/loggin/loggin.component';
import { DxButtonModule,DxFormModule, DxLoadIndicatorModule,DxButtonGroupModule,

} from 'devextreme-angular';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { UserComponent } from './views/user/user.component';
import { ClientComponent } from './views/client/client.component';
import { ProjectComponent } from './views/project/project.component';
import { CostComponent } from './views/cost/cost.component';
@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    SignUpComponent,
    ChangePasswordComponent,
    UserComponent,
    ClientComponent,
    ProjectComponent,
    CostComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    DxButtonModule,
    DxFormModule,
    DxLoadIndicatorModule,
    FormsModule,
    DxButtonGroupModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
