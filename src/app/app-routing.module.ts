import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './client/components/form-client/form-client.component';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { EditClientComponent } from './client/pages/edit-client/edit-client.component';
import { PruebComponent } from './client/pages/prueb/prueb.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { LoginComponent } from './signIn/login/login.component';
import { RegisterComponent } from './signIn/register/register.component';
import { SettingComponent } from './signIn/setting/setting.component';

const routes: Routes = [

  
  {path: 'editClient/:id', component: EditClientComponent},  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'setting', component: SettingComponent},
  {path:'' , component: DashboardComponent, pathMatch:'full'},
  {path: '**', component: NoEncontradoComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
