import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';
import { RespuestaPregunta } from '../../Servicios/respuesta_pregunta.class';

@Component({
  selector: 'app-pregunta-actividad',
  templateUrl: './pregunta-actividad.component.html',
  styleUrls: ['./pregunta-actividad.component.scss']
})
export class PreguntaActividadComponent  {
  respuesta?: number = null;
  @Input() pregunta;
  @Output() respuestaNueva = new EventEmitter<RespuestaPregunta>();

  intensaDias?: number = null;
  intensaHoras?: number = null;
  moderadaDias?: number = null;
  moderadaHoras?: number = null;
  caminarDias?: number = null;
  caminarHoras?: number = null;

  constructor() {
  }

  SonDatosValidos(): boolean {

    if (this.intensaDias === null) {
      return false;
    }
    if (this.intensaHoras === null) {
    return false;
  }
  if (this.moderadaDias === null) {
    return false;
  }
  if (this.moderadaHoras === null) {
    return false;
  }
  if (this.caminarDias === null) {
    return false;
  }
  if (this.caminarHoras === null) {
    return false;
  }

    return true;
  }

  PreguntaSiguiente() {
    this.respuesta =  this.CalcularRespuesta();
    // console.log('this.respuesta', this.respuesta);
    const repuestaItem = new RespuestaPregunta(this.respuesta , 0, this.pregunta);
    // console.log('this.repuestaItem', repuestaItem);
    this.respuestaNueva.emit(repuestaItem);
    this.respuesta = null;
  }

  private CalcularRespuesta(): number {
    return this.intensaDias * this.intensaHoras * 8
                    + this.moderadaDias * this.moderadaHoras * 4
                    + this.caminarDias * this.caminarHoras * 3.3;
  }
}
