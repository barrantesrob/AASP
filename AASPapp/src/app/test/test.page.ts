import { Component } from '@angular/core';
import { PreguntasService } from '../Servicios/preguntas.service';
import { RespuestaPregunta } from '../Servicios/respuesta_pregunta.class';
import { RespuestasService } from '../Servicios/respuestas.service';

// import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: 'test.page.html',
  styleUrls: ['test.page.scss']
})
export class TestPage {
  respuesta = -1;
  pregunta: any;
  indexPregunta = 0;

  constructor(private servicioPreguntas: PreguntasService,
   private servicioRespuestas: RespuestasService
  //  private _router: Router
  ) {
      this.pregunta = this.servicioPreguntas.Obtener(0);
      console.log('pregunta', this.pregunta);
  }

  PreguntaSiguiente() {
    this.indexPregunta = this.indexPregunta + 1;
    this.pregunta = this.servicioPreguntas.Obtener(this.indexPregunta);
    if (this.pregunta != null) {
      const repuestaItem = new RespuestaPregunta(this.respuesta, this.pregunta);
      this.servicioRespuestas.GuardarRespuesta(repuestaItem);
      this.respuesta = null;
    } else {
      // this._router.navigate(['RespuestaTest'], { replaceUrl: true});
      console.log('pregunta fin');
    }
    console.log('pregunta', this.pregunta);
  }
}
