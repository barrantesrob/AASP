import { Component } from '@angular/core';
import { PreguntasService } from '../Servicios/preguntas.service';
import { RespuestaPregunta } from '../Servicios/respuesta_pregunta.class';
import { RespuestasService } from '../Servicios/respuestas.service';

 import { Router } from '@angular/router';

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
  resultado: number;



  constructor(private servicioPreguntas: PreguntasService,
   private servicioRespuestas: RespuestasService,
    private _router: Router
  ) {
      this.pregunta = this.servicioPreguntas.Obtener(0);
      console.log('pregunta', this.pregunta);
  }

  PreguntaSiguiente(respuesta) {
    console.log('PreguntaSiguiente respuesta', respuesta);
    this.indexPregunta = this.indexPregunta + 1;
    const pregunta = this.servicioPreguntas.Obtener(this.indexPregunta);
    if (pregunta != null) {
      const repuestaItem = new RespuestaPregunta(respuesta, this.pregunta);
      console.log('repuestaItem', repuestaItem);
      this.servicioRespuestas.GuardarRespuesta(repuestaItem);
      this.respuesta = null;
      this.pregunta = pregunta;
    } else {
      // this._router.navigateByUrl('/tabs/(test:resultado)');
      console.log('pregunta fin');
      this.MostrarRespusta();
    }
    console.log('pregunta', this.pregunta);
  }

  private MostrarRespusta() {
    this.mostraResultado = true;
    this.resultado =  this.servicioRespuestas.ObtenerResultado();
    console.log('respuesta', this.resultado);
  }
}
