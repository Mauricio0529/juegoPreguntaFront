import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }

  private LOGIN_API_TOKEN = 'http://localhost:8080'

  // generamos el token
  public generateToken(loginData:any) {
    
    // se hace un post, ya que con este metodo ingresamos los datos del login (iniciamos sesion) para generar el token
    return this.http.post(`${this.LOGIN_API_TOKEN}/generate-token`, loginData);
  }

  // iniciamos sesion y establecemos el token en el localStorage
  public loginUser(token:any) {
    // guardamos el token
    localStorage.setItem('token', token);
  }

  // comprobar si estoy conectado o no lo estoy, // el usuario no ha iniciado sesion
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      // esto significa que el usuario no esta conectado o no esta usando la pagina
      return false;
    } else {
      return true;
    }
  }

  // cerramos sesion y eliminamos el token del localStorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // obtenemos el token
  public getToken() {
    return localStorage.getItem('token');
  }

  // para establecer un usuario en el localStorage
  public setUser(user:any) {
    // stringify, convierte un valor de javascript a un objeto JSON
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userString = localStorage.getItem('user');
    if(userString != null) {
      // si existe un usuario en el localStorage, lo mostramos con el JSON
      // parciamos un string a JSON
      return JSON.parse(userString);
    } else {
      // cerramos sesion
      this.logout();
      return null;
    }
  }

  // obtenemos el rol del usuario
  public getUserRole() {
    let userRole = this.getUser();
    return userRole.authorities[0].authority;
  }

  // obtener el usuario actual
  public getCurrentUser() {
    return this.http.get('http://localhost:8080/actualUser');
  }


}