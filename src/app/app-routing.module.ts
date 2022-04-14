import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './client/components/form-client/form-client.component';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { EditClientComponent } from './client/pages/edit-client/edit-client.component';
import { PruebComponent } from './client/pages/prueb/prueb.component';

const routes: Routes = [

  {path: 'clientPage', component: ClientPageComponent},
  {path: 'editClient/:id', component: EditClientComponent},
  {path: 'formClient', component: FormClientComponent},
  {path: 'prueba', component: PruebComponent},
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
