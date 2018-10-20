import { Injectable } from '@angular/core';
import { RespuestaPregunta } from './respuesta_pregunta.class';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  constructor() { }

  respuestas = [];

  GuardarRespuesta(respuesta: RespuestaPregunta) {
    this.respuestas.push(respuesta);
  }
}
