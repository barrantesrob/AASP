import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pregunta-promedio',
  templateUrl: './pregunta-promedio.component.html',
  styleUrls: ['./pregunta-promedio.component.scss']
})
export class PreguntaPromedioComponent  {
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
