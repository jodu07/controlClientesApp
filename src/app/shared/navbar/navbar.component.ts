import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
   // private loginService: LoginService,
    private router: Router,
  //  private configuracionServicio: ConfiguracionServicio
    
  ) { }

  ngOnInit() {
   
  }

  
  logout(){
    
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

   }
