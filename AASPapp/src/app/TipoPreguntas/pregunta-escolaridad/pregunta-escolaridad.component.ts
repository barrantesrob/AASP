import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pregunta-escolaridad',
  templateUrl: './pregunta-escolaridad.component.html',
  styleUrls: ['./pregunta-escolaridad.component.scss']
})
export class PreguntaEscolaridadComponent {

  respuesta?: number = null;
  @Input() pregunta;
  @Output() respuestaNueva = new EventEmitter<number>();

  constructor() {
  }

  PreguntaSiguiente() {
    this.respuestaNueva.emit(this.respuesta);
    this.respuesta = null;
  }
}
