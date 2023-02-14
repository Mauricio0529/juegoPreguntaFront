import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../../services/question/question.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  title = 'login';
  questionForm: FormGroup;
  questions: any;
  questionRandom: any;
  answerRandom: any;
  preguntas: any;

  tipoFuenteControl = new FormControl()

  constructor(
    private dialog: MatDialog,
    public formBuilder: FormBuilder, 
    public questionService: QuestionService,
  ){}

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      idQuestion: [''],
      questionNumber: ['', Validators.required],
      question: ['', Validators.required],
    });
    
    this.questionForm.disable();

    this.viewQuestionRandom();  

    this.questionService.getAllQuestion().subscribe(response => {
      this.questions = response;
    },
      error => { console.error(error) }
    );
  }
   
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogComponent, dialogConfig);
  }

  verFuente(fuente: boolean) {
    if(fuente == true) {
      this.viewQuestionRandom();
      alert("La pregunta es correcta " + fuente);
    } else {
      this.viewQuestionRandom();
      alert("La pregunta es incorrecta " + fuente);
    }
  }

  viewQuestionRandom(): void {
    this.questionService.getQuestionRandom().subscribe(response => {
      this.questionRandom = response;
      /*this.questionForm.setValue({
        idQuestion: '',
        questionNumber: this.questionRandom,
        question: 28
      });*/
      console.log(this.questionRandom);
    },
      error => { console.error(error) }
    )
   // this.time();
  }

  time():void {
/*
https://www.youtube.com/results?search_query=como+colocar+un+cronometro+en+angular
https://www.youtube.com/watch?v=5GGPB4iT5ug
https://www.youtube.com/results?search_query=como+reiniciar+o+cargar+la+pagina+en+angular

https://editor.p5js.org/Jeff-Aporta/sketches/wqS_eu6K0
https://jeff-aporta.github.io/main/Juegos/juego-de-preguntas-v2/
https://www.youtube.com/watch?v=lg90vwVxmxU

https://developer.okta.com/blog/2020/01/21/angular-material-login
como usar el mat-button-toggle vertical - este no

https://material.angular.io/components/list/examples

*/

    setTimeout(() => {
      this.viewQuestionRandom();
      alert("Su tiempo ha terminado");
    }, 4000);
  }

}