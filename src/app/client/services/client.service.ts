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




}
