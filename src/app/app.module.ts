import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FirestoreSettings } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { EditClientComponent } from './client/pages/edit-client/edit-client.component';
import { FormClientComponent } from './client/components/form-client/form-client.component';
import { TableClientComponent } from './client/components/table-client/table-client.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ClientPageComponent,
    EditClientComponent,
    FormClientComponent,
    TableClientComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
