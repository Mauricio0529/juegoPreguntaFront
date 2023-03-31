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

  /* obtiene el name del input */
  loginData = {
    "username" : '',
    "password" : ''
  }

  constructor(
    private snack: MatSnackBar,
    private loginService: LoginService,
    private router: Router
    ) {  }

  ngOnInit(): void {
 
  }

  formSubmit() {
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      this.openSnacAlert('El nombre de usuario es requerio !! ');
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {
      this.openSnacAlert('La contraseña es requeria !! ');
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
        } else if(this.loginService.getUserRole() == 'INVITADO') {
          // window.location.href = '/category';
          this.router.navigate(['category']);
        } else {
          // cerramos la sesion
          this.loginService.logout();
        }
      })
    }, error => {
      console.log(error);
      this.clearInput();
      this.openSnacAlert('Usuario y/o contraseña son invalidos, vuelva a intentar !! ');
      // this.openSnacAlert('Ups!!, hay un problema con el servidor ');
    })
  }
  
  openSnacAlert(message: string) {
    this.snack.open(message, 'Aceptar', {
      duration: 4000
    })
  }

  clearInput() {
    this.loginData.username = "";
    this.loginData.password = "";
  }
}