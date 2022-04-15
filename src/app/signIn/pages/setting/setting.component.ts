import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from '../../services/setting.service';
import { Setting } from '../../interface/setting.interface';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  permitirRegistro = false;

  constructor(
    private router: Router,
    private _settingService: SettingService
  ) { }

  ngOnInit() {
    this._settingService.getConfiguracion().subscribe(
      (configuracion: any) => {
        this.permitirRegistro = configuracion.permitirRegistro;
      }
    )
  }

  guardar(){
    let configuracion = {permitirRegistro: this.permitirRegistro};
    this._settingService.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }

}
