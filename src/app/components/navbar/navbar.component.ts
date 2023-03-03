import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public login: LoginService) { }

  ngOnInit(): void {
  
  }

  // boton cerrar sesion
  public logout() {
    this.login.logout();
    // para actualizar el navegador
    window.location.reload();
   // window.location.href = '/login';
  }

}
