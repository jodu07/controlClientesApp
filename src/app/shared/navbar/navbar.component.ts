import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from 'src/app/signIn/services/setting.service';
import { SignInService } from 'src/app/signIn/services/sign-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn!: boolean;   //esta logueado?
  loggedInUser!: string | null;     //cual es el usuario que esta lgueado?
  permitirRegistro!: boolean | undefined;

  constructor(
   private _signInService: SignInService,
   private router: Router,
   private _settingService: SettingService
    
  ) { }

  ngOnInit() {

    this._signInService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
        console.log('auth');
      }
      else{
        this.isLoggedIn = false;
      }
    });    

    this._settingService.getConfiguracion().subscribe( configuracion => {
      this.permitirRegistro = configuracion.permitirRegistro;
    })
   
  }

  
  logout(){
    
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

   }
