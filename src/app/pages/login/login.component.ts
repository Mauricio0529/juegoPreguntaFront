import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // esto es un objeto
  loginData = {
    "username" : '', // es el name del input
    "password" : ''
  }

  constructor(
    private snack: MatSnackBar,
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      this.snack.open('El nombre de usuario es requerio !!', 'Aceptar', {
        duration: 3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {
      this.snack.open('La contraseña es requeria !!', 'Aceptar', {
        duration: 3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe((data:any) => {
      console.log(data);

      // establecemos el token en el localStorage
      this.loginService.loginUser(data.token);
      
      // obtenemos el actual usuario
      this.loginService.getCurrentUser().subscribe(dataUser => {
        
        // establecemos el usuario al localStorage
        this.loginService.setUser(dataUser);
        console.log(dataUser);

        if(this.loginService.getUserRole() == 'ADMIN') {
          //window.location.href = '/admin-dashboard';
          this.router.navigate(['admin-dashboard']);
        } else if(this.loginService.getUserRole() == 'INVITADO') { // PLAYER
          // window.location.href = '/category';
          this.router.navigate(['category']);
        } else {
          // cerramos la sesion
          this.loginService.logout();
        }
      })
    }, error => {
      console.log(error);
      this.snack.open("Detalles invalidos, vuelva a intentar !!", "Aceptar", {
        duration: 3000
      });
    })

  }


/*
https://www.youtube.com/watch?v=vMgysG5G-8Q

https://www.youtube.com/watch?v=u0Xjh8FuiCw

https://www.youtube.com/watch?v=ErCIMNNfYs8

https://www.youtube.com/watch?v=HtRZDWaAgRw


https://material.angular.io/components/snack-bar/examples

*/



}
