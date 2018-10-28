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
   public servicioRespuestas: RespuestasService,
    private _router: Router
  ) {
      this.pregunta = this.servicioPreguntas.Obtener(0);
      console.log('pregunta', this.pregunta);
  }

  PreguntaSiguiente(repuestaItem: RespuestaPregunta) {
    this.servicioRespuestas.GuardarRespuesta(repuestaItem);
    console.log('repuestaItem', repuestaItem);
    this.indexPregunta = this.indexPregunta + 1;
    const pregunta = this.servicioPreguntas.Obtener(this.indexPregunta);
    if (pregunta != null) {
      this.respuesta = null;
      this.pregunta = pregunta;
      console.log('pregunta', this.pregunta);
    } else {
      // this._router.navigateByUrl('/tabs/(test:resultado)');
      console.log('pregunta fin');
      this.MostrarRespuesta();
    }
  }

  private MostrarRespuesta() {
    this.mostraResultado = true;
    this.resultado =  this.servicioRespuestas.ObtenerResultado();
    console.log('respuesta', this.resultado);
  }
}
