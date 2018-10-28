import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RespuestaPregunta } from '../../Servicios/respuesta_pregunta.class';

@Component({
  selector: 'app-pregunta-escala',
  templateUrl: './pregunta-escala.component.html',
  styleUrls: ['./pregunta-escala.component.scss']
})
export class PreguntaEscalaComponent  {
  respuesta = -1;
  @Input() pregunta;
  @Output() respuestaNueva = new EventEmitter<RespuestaPregunta>();

  constructor() {
  }

  PreguntaSiguiente() {
    const index: string =  this.respuesta.toString();
    const valor =  this.pregunta[index];
    const repuestaItem = new RespuestaPregunta(valor, this.respuesta, this.pregunta);
    this.respuestaNueva.emit(repuestaItem);
    this.respuesta = -1;
  }
}
