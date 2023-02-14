import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  private API_SERVER_ALL = "http://localhost:8080/question/allQuestion";
  private API_SERVER_QUESTION = "http://localhost:8080/question/getQuestionRandom"; //http://localhost:8080/question/getQuestion
  
  constructor(private HttpClient: HttpClient) { }

  public getAllQuestion(): Observable<any> {
    return this.HttpClient.get(this.API_SERVER_ALL)
  }

  public getQuestionRandom(): Observable<any> {
    return this.HttpClient.get(this.API_SERVER_QUESTION)
  }
}