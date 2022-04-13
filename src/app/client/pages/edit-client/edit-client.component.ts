import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Client } from '../../interface/client.interface';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client: Client ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  id!: string;

  constructor(private _clientService: ClientService,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }

  guardar(f:NgForm){
    if(!f.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente',{
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      f.value.id = this.id;
      //modicar el cliente
      this._clientService.updateClient(f.value);  
      this.router.navigate(['/']);
    }
  }  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._clientService.getClient(this.id).subscribe( cliente =>{
      this.client = cliente;
    });
  }

  delete(){
    if(confirm('¿Seguro que desea elminiar el cliente?')){
      this._clientService.deleteClient(this.client);
      this.router.navigate(['/']);
    }
  }

}
