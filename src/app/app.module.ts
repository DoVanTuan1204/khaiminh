import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './share/component/loggin/loggin.component';
import { DxButtonModule,DxFormModule,
   DxLoadIndicatorModule,
   DxButtonGroupModule,
   DxTextBoxModule,
   DxValidatorModule,
   DxTabsModule,
    DxNavBarModule,
    DxDataGridModule,
  DxMenuModule} from 'devextreme-angular';
import { SignUpComponent } from './share/component/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './share/component/change-password/change-password.component';
import { UserComponent } from './views/user/user.component';
import { ClientComponent } from './views/client/client.component';
import { ProjectComponent } from './views/project/project.component';
import { CostComponent } from './views/cost/cost.component';
import dxTextBox from 'devextreme/ui/text_box';
import { HomePageComponent } from './share/component/home-page/home-page.component';
import { AuthService } from './share/services/auth.service';
import { HttpClientModule, } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    SignUpComponent,
    ChangePasswordComponent,
    UserComponent,
    ClientComponent,
    ProjectComponent,
    CostComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxFormModule,
    DxLoadIndicatorModule,
    FormsModule,
    DxButtonGroupModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxTabsModule,
    DxNavBarModule,
    DxMenuModule,
    HttpClientModule,
    DxDataGridModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
