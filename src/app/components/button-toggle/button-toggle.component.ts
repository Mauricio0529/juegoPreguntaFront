import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent implements OnInit {
  //fontStyleControl = new FormControl('');
  fontStyleControl!: string
  tipoFuente = new FormControl()
  constructor() { }

  ngOnInit(): void {
  }

  verFuente(fuente:String) {
    console.log(fuente);
    console.log(this.tipoFuente.value);
  }

}
