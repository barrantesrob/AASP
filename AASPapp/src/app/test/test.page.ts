import { Component } from '@angular/core';
import { PreguntasService } from '../Servicios/preguntas.service';
import { RespuestaPregunta } from '../Servicios/respuesta_pregunta.class';
import { RespuestasService } from '../Servicios/respuestas.service';

 import { Router } from '@angular/router';
import { Resultado, EnumClasificacion } from '../Servicios/resultado.class';
import { SemaforoDatos, ColorSemaforo } from '../Servicios/semaforo.datos';

@Component({
  selector: 'app-test',
  templateUrl: 'test.page.html',
  styleUrls: ['test.page.scss']
})
export class TestPage {
  respuesta = -1;
  pregunta: any;
  indexPregunta = 0;
  mostraResultado = false;
  resultado: Resultado;
  datosSemaforo = SemaforoDatos.DatosDelSemaforo;

  constructor(private servicioPreguntas: PreguntasService,
    public servicioRespuestas: RespuestasService,
    private _router: Router
    ) {
      this.pregunta = this.servicioPreguntas.Obtener(0);
    }

    PreguntaSiguiente(repuestaItem: RespuestaPregunta) {
    this.servicioRespuestas.GuardarRespuesta(repuestaItem);
    this.indexPregunta = this.indexPregunta + 1;
    const pregunta = this.servicioPreguntas.Obtener(this.indexPregunta);
    if (pregunta != null) {
      this.respuesta = null;
      this.pregunta = pregunta;
    } else {
      this.MostrarRespuesta();
    }
  }

  private MostrarRespuesta() {
    this.mostraResultado = true;
    this.resultado =  this.servicioRespuestas.ObtenerResultado();
    this.MostrarSemaforo();
    // console.log('respuesta', this.resultado);
  }

  MostrarSemaforo(): any {
    console.log(this.datosSemaforo);
    for (const grupos of this.datosSemaforo) {
      console.log(grupos);
      for (const item of grupos.Items) {
        console.log(item);
        console.log('item.Numero', item.Numero);
        console.log('this.servicioRespuestas.respuestas', this.servicioRespuestas.respuestas);
        const respuestaItem = this.servicioRespuestas.respuestas.find(
          respuesta => respuesta.NumeroPregunta  === item.Numero );
          console.log(respuestaItem);
          if (respuestaItem) {
            item.Color = this.CalcularColor(respuestaItem.Opcion);
          }
      }
    }
 }

 CalcularColor(opcionRespuesta: number): ColorSemaforo {
   if (opcionRespuesta <= 4) {
        return ColorSemaforo.Rojo;
   } else if (opcionRespuesta > 7) {
        return ColorSemaforo.Verde;
   } else {
        return ColorSemaforo.Amarillo;
   }
 }


 ObtenerColorSemaforo(enumColor: ColorSemaforo): string {
   console.log('enumColor', enumColor);
   let respuesta: string;
   switch (enumColor) {
     case ColorSemaforo.Rojo:
       respuesta = 'danger';
     break;
     case ColorSemaforo.Verde:
       respuesta = 'success';
     break;
     case ColorSemaforo.Amarillo:
       respuesta = 'warning';
     break;
   }
  console.log('respuesta color', respuesta);
  return respuesta;
 }


}
