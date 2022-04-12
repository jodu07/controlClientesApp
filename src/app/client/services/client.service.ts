import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Client } from '../interface/client.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

    clientsColeccion!: AngularFirestoreCollection<Client>;
    clientDoc!: AngularFirestoreDocument<Client>;
    clients!: Observable<Client[]>;
    client!: Observable<Client>;

  constructor( private db: AngularFirestore) {
    this.clientsColeccion = db.collection('clientes', ref => ref.orderBy('nombre', 'asc'));
   }


   getClients(): Observable<Client[]>{
    // obtener clientes
    
    this.clients = this.clientsColeccion.snapshotChanges().pipe(
        map( cambios => {
            return cambios.map( accion => {
                const DATOS = accion.payload.doc.data() as Client;
                DATOS.id = accion.payload.doc.id;
                return DATOS;
                
            })
        })
    );
    return this.clients; 
  }  
  
  addClient(cliente: Client){
    this.clientsColeccion.add(cliente);
}

//metodo para llamar cliente desde la bd y editarlo..... recuperar el documento con el id

 getClient(id: string): Observable<Client>{
    this.clientDoc = this.db.doc<Client>(`clientes/${id}`);
    return this.client = this.clientDoc.snapshotChanges().pipe(
        map( accion => {
            if(accion.payload.exists === false){
                return null;
            }
            else{
                const DATOS = accion.payload.data() as Client;
                DATOS.id = accion.payload.id;
                return DATOS as any;
            }
        })
    );
    return this.client;
    }

    updateClient(cliente: Client){
      this.clientDoc = this.db.doc(`clientes/${cliente.id}`);
      this.clientDoc.update(cliente);
  }

  deleteClient(cliente: Client){
      this.clientDoc = this.db.doc(`clientes/${cliente.id}`);
      this.clientDoc.delete();
  }


}
