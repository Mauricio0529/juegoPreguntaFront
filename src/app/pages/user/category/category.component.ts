import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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

  public colSize = 2;
  public isMobile: boolean = false;

  constructor(
    private categoryService: CategoryService, 
    private questionService: QuestionService,
    public breakpointObserver: BreakpointObserver
  ){ 
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
        this.isMobile = result.matches;

        if(this.isMobile) {
          this.colSize = 1;

        } else {
          this.colSize = 2;
        }
    });
  }

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