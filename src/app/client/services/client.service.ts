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

   getClients(): Observable<any>{       
    return this.db.collection('clientes', ref => ref.orderBy('nombre', 'asc')).snapshotChanges();    
  }

  addClient(cliente: Client){
    this.clientsColeccion.add(cliente);
  }

  //metodo para llamar cliente desde la bd y editarlo..... recuperar el documento con el id
  // doc para llamar un solo objeto

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
