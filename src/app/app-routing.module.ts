import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './client/components/form-client/form-client.component';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { EditClientComponent } from './client/pages/edit-client/edit-client.component';
import { PruebComponent } from './client/pages/prueb/prueb.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './signIn/login/login.component';

const routes: Routes = [

  {path: 'clientPage', component: ClientPageComponent},
  {path: 'editClient/:id', component: EditClientComponent},
  {path: 'formClient', component: FormClientComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prueba', component: PruebComponent},
  {path:'' , component: DashboardComponent, pathMatch:'full'}  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
