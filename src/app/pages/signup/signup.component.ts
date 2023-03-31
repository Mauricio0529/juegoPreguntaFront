import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 4;

  userData = {
    "username" : '',
    "password" : '',
    "email" : ''
  }

  constructor(
    private signupService: SignupService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  save(): void {
    if(this.userData.username.trim() == '' || this.userData.username.trim() == null || 
      this.userData.password.trim() == '' || this.userData.password.trim() == null ||
      this.userData.email.trim() == '' || this.userData.email.trim() == null ) {
      this.openSnacAlert('No dejes campos vacios ');
      return;
    }

    this.signupService.signup(this.userData).subscribe((data: any) => {
      this.openSnackBarRegister();
      this.clearInput();
    }, error => {
      console.log(error);
      this.openSnacAlert('Upss!!, hay un problema con el servidor ');
      this.clearInput();
    })
    
  }

  openSnackBarRegister() {
    this._snackBar.open('Su cuenta ha sido creada con exito!!', 'Aceptar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:  this.durationInSeconds * 1000
    });
  }

  openSnacAlert(message: string) {
    this.snack.open(message, 'Aceptar', {
      duration: 4000
    })
  }

  clearInput() {
    this.userData.username = "";
    this.userData.password = "";
    this.userData.email = "";
  }
}