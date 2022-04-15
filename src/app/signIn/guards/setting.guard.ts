import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingService } from '../services/setting.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingGuard implements CanActivate {
  constructor(
    private router: Router,
    private _settingService: SettingService
){}

canActivate(): Observable<boolean>{
    return this._settingService.getConfiguracion().pipe(
        map( configuracion => {
            if(configuracion.permitirRegistro){
                return true;
            }
            else{
                this.router.navigate(['/login']);
                return false;
            }
        })
    );
}
}
