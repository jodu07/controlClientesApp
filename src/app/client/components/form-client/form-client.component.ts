import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Client } from '../../interface/client.interface';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  @Output() onEnter   : EventEmitter<Form> = new EventEmitter();

  client: Client ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }
  constructor() { }

  enviarTerminosAAgregar(formulario: NgForm){    
    this.onEnter.emit(formulario);
   }

  ngOnInit(): void {
  }

}
