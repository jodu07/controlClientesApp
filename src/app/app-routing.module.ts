import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { EditClientComponent } from './client/pages/edit-client/edit-client.component';

const routes: Routes = [

  {path: 'clientPage', component: ClientPageComponent},
  {path: 'editClient/:id', component: EditClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
