import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-pregunta-actividad',
  templateUrl: './pregunta-actividad.component.html',
  styleUrls: ['./pregunta-actividad.component.scss']
})
export class PreguntaActividadComponent  {
  respuesta?: number = null;
  @Input() pregunta;
  @Output() respuestaNueva = new EventEmitter<number>();

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
    console.log('Respuesta', this.respuesta );
    this.respuestaNueva.emit(this.respuesta);
    this.respuesta = null;
  }

  private CalcularRespuesta(): number {
    return this.intensaDias * this.intensaHoras * 8
                    + this.moderadaDias * this.moderadaHoras * 4
                    + this.caminarDias * this.caminarHoras * 3.3;
  }
}
