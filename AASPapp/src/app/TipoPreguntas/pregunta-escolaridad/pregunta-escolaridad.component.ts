import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RespuestaPregunta } from '../../Servicios/respuesta_pregunta.class';

@Component({
  selector: 'app-pregunta-escolaridad',
  templateUrl: './pregunta-escolaridad.component.html',
  styleUrls: ['./pregunta-escolaridad.component.scss']
})
export class PreguntaEscolaridadComponent {

  respuesta?: number = null;
  @Input() pregunta;
  @Output() respuestaNueva = new EventEmitter<RespuestaPregunta>();

  constructor() {
  }

  PreguntaSiguiente() {
    const repuestaItem = new RespuestaPregunta(this.respuesta, this.respuesta, this.pregunta);
    this.respuestaNueva.emit(repuestaItem);
    this.respuesta = null;
  }
}
