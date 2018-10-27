import { Injectable } from '@angular/core';
import { RespuestaPregunta } from './respuesta_pregunta.class';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  constructor() { }

  respuestas = [];
  constanteBajo =  -181.48390;
  constanteMedio =	-207.57735;
  constanteAlto =	-226.42301;

  GuardarRespuesta(respuesta: RespuestaPregunta) {
    this.respuestas.push(respuesta);
    console.log('respuestas', this.respuestas);
  }

  ObtenerResultado() {
    let bajo = 0;
    let medio = 0;
    let alto = 0;
    this.respuestas.forEach(
      function(respuesta: RespuestaPregunta) {
        bajo += respuesta.Bajo;
        medio += respuesta.Medio;
        alto += respuesta.Alto;
        console.log(respuesta);
      });
      ({ bajo, medio, alto } = this.SumarConstantes(bajo, medio, alto));
      console.log('bajo, medio, alto', {bajo, medio, alto});
      return this.EvaluarResultado(bajo, medio, alto);
    }

  private SumarConstantes(bajo: number, medio: number, alto: number) {
    bajo += this.constanteBajo;
    medio += this.constanteMedio;
    alto += this.constanteAlto;
    return { bajo, medio, alto };
  }

  private EvaluarResultado(bajo: number, medio: number, alto: number): number {
    if (bajo > medio && bajo > alto) {
      return bajo;
      } else if (medio > alto && medio > bajo) {
        return medio;
      } else {
        return alto;
      }
  }

    
}
