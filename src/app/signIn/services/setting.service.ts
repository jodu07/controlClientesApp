import { Injectable } from '@angular/core';
import { Firestore,   } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Setting } from '../interface/setting.interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class SettingService {

  settingDoc!: AngularFirestoreDocument<Setting>;
  setting!: Observable<Setting>;

  id = '1';

  constructor(private db: AngularFirestore) { }

  getConfiguracion(): Observable<Setting>{
    this.settingDoc = this.db.doc<Setting>(`configuracion/${this.id}`);
    
    return this.setting;
}    

modificarConfiguracion(configuracion: Setting){
    this.settingDoc = this.db.doc<Setting>(`configuracion/${this.id}`);
    this.settingDoc.update(configuracion);
}
}
