import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'flash-messages-angular';
import { RouterModule } from '@angular/router';

import { PruebComponent } from './pages/prueb/prueb.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { EditClientComponent } from './pages/edit-client/edit-client.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { TableClientComponent } from './components/table-client/table-client.component';

@NgModule({
  declarations: [
    ClientPageComponent,
    EditClientComponent,
    FormClientComponent,
    TableClientComponent,
    PruebComponent,

  ],
  imports: [
    CommonModule,
    FlashMessagesModule.forRoot(),  
    FormsModule,    
    RouterModule
  
  ],
  exports: [
    ClientPageComponent
 
  ]
})
export class ClientModule { }
