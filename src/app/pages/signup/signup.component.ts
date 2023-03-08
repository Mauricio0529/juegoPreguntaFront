import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '../../components/dialog/dialog.component';
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
  //usuarioForm: any = FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 3;

  userData = {
    "username" : '',
    "password" : '',
    "email" : ''
  }

  constructor(
   // public fb: FormBuilder,
    private signupService: SignupService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    /*this.usuarioForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });*/
  }

  save(): void {
    if(this.userData.username.trim() == '' || this.userData.username.trim() == null || 
      this.userData.password.trim() == '' || this.userData.password.trim() == null ||
      this.userData.email.trim() == '' || this.userData.email.trim() == null ) {
      this.snack.open('No dejes campos vacios ', 'Aceptar', {
        duration: 3000
      })
      return;
    }

    this.signupService.signup(this.userData).subscribe((data: any) => {
      this.openSnackBar();
    }, error => {
      console.log(error);
    })
    
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogComponent, dialogConfig);
  }

  openSnackBar() {
    this._snackBar.open('Su cuenta ha sido creada con exito!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:  this.durationInSeconds * 1000
    });
  }
}