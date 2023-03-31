import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-red',
  templateUrl: './dialog-red.component.html',
  styleUrls: ['./dialog-red.component.css']
})
export class DialogRedComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogRedComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  
  ) { }

  ngOnInit(): void {
  }
  
  close() {
   // this.dialogRef.close();
  }
}
