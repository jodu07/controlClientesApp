import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    RouterModule
  ]
})
export class SignInModule { }
