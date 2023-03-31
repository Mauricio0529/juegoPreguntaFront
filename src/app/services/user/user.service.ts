import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_SCORE_USER = "http://localhost:8080/usuarios/getScore";
  private API_ORDER_SCORE_USER = "http://localhost:8080/usuarios/usersScore";

  constructor(private HttpClient: HttpClient) { }
  
  public getScoreUser(): Observable<any> {
    return this.HttpClient.get(this.API_SCORE_USER);
  }

  public orderUserByScore():  Observable<any> {
    return this.HttpClient.get(this.API_ORDER_SCORE_USER);
  }
  
}
