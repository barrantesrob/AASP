import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pregunta-escala',
  templateUrl: './pregunta-escala.component.html',
  styleUrls: ['./pregunta-escala.component.scss']
})
export class PreguntaEscalaComponent  {
  respuesta = -1;
  @Input() pregunta;
  @Output() respuestaNueva = new EventEmitter<number>();

  constructor() {
  }

  PreguntaSiguiente() {
    console.log("this.respuesta", this.respuesta);
    this.respuestaNueva.emit(this.respuesta);
    this.respuesta = -1;
  }
}
