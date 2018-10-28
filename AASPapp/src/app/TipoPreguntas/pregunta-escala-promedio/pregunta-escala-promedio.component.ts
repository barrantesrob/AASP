import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RespuestaPregunta } from '../../Servicios/respuesta_pregunta.class';

@Component({
  selector: 'app-pregunta-escala-promedio',
  templateUrl: './pregunta-escala-promedio.component.html',
  styleUrls: ['./pregunta-escala-promedio.component.scss']
})
export class PreguntaEscalaPromedioComponent {
  respuesta = -1;
  @Input() pregunta;
  @Output() respuestaNueva = new EventEmitter<RespuestaPregunta>();

  constructor() {
  }

  PreguntaSiguiente() {
    const repuestaItem = new RespuestaPregunta(this.respuesta, this.respuesta, this.pregunta);
    this.respuestaNueva.emit(repuestaItem);
    this.respuesta = -1;
  }
}
