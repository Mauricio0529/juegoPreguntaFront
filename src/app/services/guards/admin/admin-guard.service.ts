import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})

/*
  EL GUARD, CanActivate ESTE SE EJECUTA ANTES DE CARGAR UNA RUTA O ANTES DE PASAR A OTRA PAGINA.
  
  NOTA:
        HAY QUE COLOCAR EL GUARD EN LAS RUTAS MENOS EN LA DE LOGIN Y REGISTRO,
        PARA VALIDAR SI EL USUARIO HA INICIADO SESION.

  CanActivate: Antes de cargar los componentes de la ruta.
  CanLoad: Antes de cargar los recursos (assets) de la ruta.
  CanDeactivate: Antes de intentar salir de la ruta actual (usualmente utilizado para evitar salir de una ruta,
                                                            si no se han guardado los datos).
  CanActivateChild: Antes de cargar las rutas hijas de la ruta actual.
*/

export class AdminGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    /*
      Entonces, el funcionamiento de esta clase es, si el usuario no ha iniciado sesion no me permita ingresar 
      a las rutas por medio del navegador.
    */

    // comprobamos si el token del usuario todavia esta guardado en el localStorage y validamos el rol
    if(this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'ADMIN') {
      return true;
    }
    
    // si no ha iniciado sesion, me lleve al login
    this.router.navigate(['']);
    return false;
  }
}