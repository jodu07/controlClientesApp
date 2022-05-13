import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './client/components/form-client/form-client.component';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { EditClientComponent } from './client/pages/edit-client/edit-client.component';
import { PruebComponent } from './client/pages/prueb/prueb.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { AuthGuard } from './signIn/guards/auth.guard';
import { SettingGuard } from './signIn/guards/setting.guard';
import { LoginComponent } from './signIn/pages/login/login.component';
import { RegisterComponent } from './signIn/pages/register/register.component';
import { SettingComponent } from './signIn/pages/setting/setting.component';


const routes: Routes = [

  
  {path: 'editClient/:id', component: EditClientComponent, canActivate: [AuthGuard]},  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'setting', component: SettingComponent, canActivate: [AuthGuard]},
  {path:'' , component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoEncontradoComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
