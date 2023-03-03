import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_CATEGORY_ALL = 'http://localhost:8080/category/allCategory';

  constructor(public http: HttpClient) { }

  public getAllCategory(): Observable<any> {
    return this.http.get(this.API_CATEGORY_ALL);
  }
}