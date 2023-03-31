import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  private API_SERVER_ALL = "http://localhost:8080/question/allQuestion";
  private API_QUESTION_RANDOM = "http://localhost:8080/question/getQuestion/";
  private API_POINT_QUESTION = "http://localhost:8080/question/points"
  private API_SELECTED_QUESTION = "http://localhost:8080/question/validateQuestion/"

  private idCategory: any;
 
  constructor(private HttpClient: HttpClient) { }

  public getQuestionRandom(): Observable<any> {
    return this.HttpClient.get(`${this.API_QUESTION_RANDOM}`+ this.idCategory);
  }

  public getCategory(idCategory: any): Observable<any> {
    this.idCategory = idCategory;
    return this.idCategory;
  }

  public getAllQuestion(): Observable<any> {
    return this.HttpClient.get(this.API_SERVER_ALL);
  }

  public validatePointQuestion(): Observable<any> {
    return this.HttpClient.get(this.API_POINT_QUESTION);
  }

  public validateCorrectQuestion(selectedQuestion: any): Observable<any> {
    return this.HttpClient.get(`${this.API_SELECTED_QUESTION}` + selectedQuestion);
  }
}