import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  score: number = 0;

  constructor(
    public login: LoginService,
    public userService: UserService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.userService.getScoreUser().subscribe(response => {
      this.score = response;
    }, error => { 
        console.error(error);
    });
  }

  // boton cerrar sesion
  public logout() {
    this.login.logout();
    // para actualizar el navegador
    window.location.reload();
  }
}