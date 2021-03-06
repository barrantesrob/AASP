import { Component, Output, Input, EventEmitter } from '@angular/core';
import { RespuestaPregunta } from '../../Servicios/respuesta_pregunta.class';


@Component({
  selector: 'app-pregunta-promedio',
  templateUrl: './pregunta-promedio.component.html',
  styleUrls: ['./pregunta-promedio.component.scss']
})
export class PreguntaPromedioComponent  {
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
