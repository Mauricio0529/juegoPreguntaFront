import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  private API_SIGNUP = 'http://localhost:8080/usuarios/';

  public signup(userData: any) {
    return this.http.post(this.API_SIGNUP, userData);
  }
}
