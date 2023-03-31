import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../../../services/question/question.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../../components/dialog/succes-green/dialog.component';
import { DialogRedComponent } from '../../../components/dialog/alert-red/dialog-red/dialog-red.component';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {
  title = 'game';
  questionForm: FormGroup;
  questionRandom: any;
  questionSuscribe: any;
  numberQuestion: number =  0;
  pointsGame: number = 0;

  time: number = 10;
  timePaused: boolean = false;
  timeStop: any;

  tipoFuenteControl = new FormControl()

  constructor(
    private dialog: MatDialog,
    public formBuilder: FormBuilder, 
    public questionService: QuestionService,
    public snack: MatSnackBar,
    private router: Router
  ){}

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      idQuestion: [''],
      questionNumber: ['', Validators.required],
      question: ['', Validators.required],
    });

    this.questionForm.disable();
    this.showQuestionRandom();
  }

  ngOnDestroy() {
    this.questionSuscribe.unsubscribe();
    clearInterval(this.timeStop);
  }

  showQuestionRandom(): void {
    this.questionSuscribe = this.questionService.getQuestionRandom().subscribe(response => {
      this.questionRandom = response;
      this.numberQuestion++;
      this.timeGame();
      console.log(this.questionRandom);
     
    }, error => { 
        this.dialogDataScoreUser();
        console.error(error) 
      }
    )
  
  }

  dialogDataScoreUser() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '465px',
      height: '200px',
      disableClose: true,
      data: 'Su puntaje es: ' + this.pointsGame
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result) {
        this.router.navigate(['category']);
      }
    });
  }

  dialogExpiredTimeGame() {
    const dialogRef = this.dialog.open(DialogRedComponent, {
      width: '450px',
      height: '200px',
      disableClose: true,
      data: 'Upss !! su tiempo ha terminado'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result) {
        console.log("Se reinica");
        this.showQuestionRandom();
      }
    });
    //Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success');
  }

  validateSelectedQuestion(answerSelect: boolean) {
    this.questionService.validateCorrectQuestion(answerSelect).subscribe(response => {
      if(response) {
        clearInterval(this.timeStop);
        this.pointsGame++;
        this.questionService.validatePointQuestion().subscribe();
        this.openSweetAlert('Bien!', 'La pregunta es correcta', 'success');
      } else {
        clearInterval(this.timeStop);
        this.openSweetAlert('Upss!', 'La pregunta es incorrecta', 'error');
      }
    }, 
    error => {
        console.error(error) 
    }
    );
  }

  openSweetAlert(titles: string, text: string, icon: any):void {
    Swal.fire({
      title: titles,
      text: text,
      icon: icon,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Continuar'
    }).then((result) => {
        if (result.isConfirmed) {
          this.showQuestionRandom();
        }
    })
  }

  timeGame():void {
    this.time = 10;
    this.timeStop = setInterval(() => {
      if(this.time > 0) {
        this.time--;
        console.log(this.timeStop);
      } else {
        clearInterval(this.timeStop);
        this.dialogExpiredTimeGame();
      }
    }, 1000)
  }
}