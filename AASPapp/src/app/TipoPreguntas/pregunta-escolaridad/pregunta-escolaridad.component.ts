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
    console.log('respuesta', this.respuesta);
  }

  PreguntaSiguiente() {
    console.log('respuesta', this.respuesta);
    const repuestaItem = new RespuestaPregunta(this.respuesta, this.respuesta, this.pregunta);
    this.respuestaNueva.emit(repuestaItem);
    this.respuesta = null;
    console.log('respuesta', this.respuesta);
  }
}
