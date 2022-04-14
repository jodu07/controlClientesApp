import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientModule } from '../client/client.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClientModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
