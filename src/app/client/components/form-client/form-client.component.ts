import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Client } from '../../interface/client.interface';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {


  //viewChild para recibir los valores del formulario
 // @ViewChild("clienteForm") clientForm!: NgForm;
 
  @Output() onEnter  : EventEmitter<Form> = new EventEmitter();

  client: Client ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }
  constructor() { }

  enviarFormularioAAgregar(formulario: NgForm){   
// aca los estamos recibiendo el formulario con los valores 
//para emitirlo al componente padre (clientPage) y ejecutar el metodo para agregarlo 
    this.onEnter.emit(formulario);
   }

  ngOnInit(): void {
  }

}
