import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

 // @ViewChild("clienteForm") clientForm!: NgForm;

  @ViewChild("botonCerrar") botonCerrar!: ElementRef;

  constructor(private _clientService: ClientService,
              private flashMessages: FlashMessagesService
     ){}    

     listClients(){
      this._clientService.getClients().subscribe(doc => {           
        this.clients = [];
        doc.forEach((element: any) => {
          this.clients.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          });
        });
        console.log(this.clients);
      })
    }

    agregar(formulario:any){
      console.log(formulario.value);
      if(!formulario.valid){
        this.flashMessages.show('por favor llena el formulario correctamente', {
          cssClass: 'alert-danger', timeout: 4000
        });
      }
      else{
        //Agregar el nuevo cliente
        this._clientService.addClient(formulario.value);
        this.cerrarModal();
        formulario.resetForm();

        this.flashMessages.show('cliente agreado correctamente', {
          cssClass: 'alert-danger', timeout: 4000
        }); 
      }
  
    }

    private cerrarModal(){
      this.botonCerrar.nativeElement.click();
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
  
  ngOnInit(): void {
    this.listClients();      
   } 



}
