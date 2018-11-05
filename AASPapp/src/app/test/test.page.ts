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
  mostraSituacionActual = false;
  resultado: Resultado;
  // datosSemaforo = SemaforoDatos.DatosDelSemaforo;

  constructor(private servicioPreguntas: PreguntasService,
    public servicioRespuestas: RespuestasService,
    private router: Router
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
    this.mostraSituacionActual = true;
    this.resultado =  this.servicioRespuestas.ObtenerResultado();

    // this.MostrarSemaforo();
     console.log('respuesta', this.resultado);
  }

  irPerfilActua() {
    let rando = Math.random();
    let rando2 = Math.random();
    return this.router.navigateByUrl('/tabs/(test:resultado)?id= ' + rando + '&id2=' + rando2);
  }

}
