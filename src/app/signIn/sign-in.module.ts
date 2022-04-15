import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashMessagesModule } from 'flash-messages-angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SettingComponent } from './pages/setting/setting.component';


@NgModule({
  declarations: [
    LoginComponent, 
    SettingComponent,
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
