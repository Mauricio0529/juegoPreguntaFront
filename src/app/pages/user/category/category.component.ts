import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  categorys: any;

  constructor(
    private categoryService: CategoryService, 
    private questionService: QuestionService  
  ){ }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(response => {
      this.categorys = response;
    }, error => {
      console.log(error);
    })
  }

  public getCategoryById(id: any) {    
    this.questionService.getCategory(id);
  }
}