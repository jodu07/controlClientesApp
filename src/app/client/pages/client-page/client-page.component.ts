import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'flash-messages-angular';
import { Client } from '../../interface/client.interface';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {
  clients: Client[]=[];
  client: Client ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  @ViewChild("clienteForm") clienteForm!: NgForm;

  @ViewChild("botonCerrar") botonCerrar!: ElementRef;





  constructor(private _clientService: ClientService,
              private flashMessages: FlashMessagesService
     ){}


     ngOnInit(): void {
      this._clientService.getClients().subscribe(
         clientes => {
           this.clients = clientes;
           console.log(clientes);
         }
       ) 
       
     } 

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clients){
      this.clients.forEach( cliente =>{
        saldoTotal += Number(cliente.saldo);
      });
    }
    return saldoTotal;
  }

  agregar(f:NgForm){
    console.log(f.value);
    if(!f.valid){
      this.flashMessages.show('por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      //Agregar el nuevo cliente
      this._clientService.addClient(f.value);
      this.clienteForm.resetForm();
      this.cerrarModal();

    }

  }

  private cerrarModal(){
   this.botonCerrar.nativeElement.click();
  }




}
