import { Injectable } from '@angular/core';
import { RespuestaPregunta } from './respuesta_pregunta.class';
import { Resultado, EnumClasificacion } from './resultado.class';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  constructor() { }

  respuestas = [];
  // respuestasSimple = [];
  constanteBajo =  -181.48390;
  constanteMedio =	-207.57735;
  constanteAlto =	-226.42301;

  GuardarRespuesta(respuesta: RespuestaPregunta) {
    this.respuestas.push(respuesta);

    // const respuestaSimple = {};
    // respuestaSimple[respuesta.NumeroPregunta] = respuesta.Opcion;

    // this.respuestasSimple.push(respuestaSimple);
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
      });
      ({ bajo, medio, alto } = this.SumarConstantes(bajo, medio, alto));
      return this.EvaluarResultado(bajo, medio, alto);
    }

  private SumarConstantes(bajo: number, medio: number, alto: number) {
    bajo += this.constanteBajo;
    medio += this.constanteMedio;
    alto += this.constanteAlto;
    return { bajo, medio, alto };
  }

  private EvaluarResultado(bajo: number, medio: number, alto: number): Resultado {
    if (bajo > medio && bajo > alto) {
      return new Resultado(EnumClasificacion.Bajo, bajo);
      } else if (medio > alto && medio > bajo) {
        return new Resultado(EnumClasificacion.Medio, medio);
      } else {
        return new Resultado(EnumClasificacion.Alto, alto);
      }
  }
}
