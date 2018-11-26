import { Component } from '@angular/core';
import { PreguntasService } from '../Servicios/preguntas.service';
import { RespuestaPregunta } from '../Servicios/respuesta_pregunta.class';
import { RespuestasService } from '../Servicios/respuestas.service';
import { Router } from '@angular/router';
import { Resultado } from '../Servicios/resultado.class';
import { RespuestaRespositorioService } from '../Servicios/respuesta-respositorio.service';

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
  mostrarDemografica = false;
  mostraSituacionActual = false;
  resultado: Resultado;
  // datosSemaforo = SemaforoDatos.DatosDelSemaforo;

  constructor(private servicioPreguntas: PreguntasService,
    public servicioRespuestas: RespuestasService,
    private router: Router,
    private repositorio: RespuestaRespositorioService
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
      this.MostrarPrguntaDemografica();
    }
  }

  private MostrarPrguntaDemografica() {
    this.pregunta.Pregunta_es = 'Por favor completa la siguiente información:';
    this.pregunta.Tipo = 0;
    this.mostrarDemografica = true;
  }

  finalizar(datoDemograficos: any) {
    console.log('datoDemograficos', datoDemograficos);
    this.MostrarRespuesta();
    this.GurdarPregunta(datoDemograficos);
  }

  private GurdarPregunta(datoDemograficos: any) {


    /*const fechaTemp =
    datoDemograficos.fechaNacimiento.year.text + '-' +
    datoDemograficos.fechaNacimiento.month.value + '-' +
    datoDemograficos.fechaNacimiento.day.text + 'T00:00:00';*/

    const fechaDeLaEncuesta = (new Date(Date.now()));
    const dato = {
      FechaDeLaEncuesta: fechaDeLaEncuesta,
      FechaNacimiento: datoDemograficos.fechaNacimiento,
      DatosDePruba: datoDemograficos.datosDePruba,
      Genero: datoDemograficos.genero,
      Pais: datoDemograficos.pais,
    };
    this.servicioRespuestas.respuestas.forEach(
      function(respuesta: RespuestaPregunta) {
        dato['Pregunta - ' + respuesta.NumeroPregunta] = respuesta.Opcion;
      });

    this.repositorio.GurdarPregunta(dato).subscribe(x => {
      console.log('Se guardo');
    }, error => {
      console.log('error', error);
    });
  }

  private MostrarRespuesta() {
    this.mostraResultado = true;
    this.mostraSituacionActual = true;
    this.resultado =  this.servicioRespuestas.ObtenerResultado();

    // this.MostrarSemaforo();
     console.log('respuesta', this.resultado);
  }

  irRendimientoActual() {
    const opcionRespuesta = 1;
    return this.NavegarARespuesta(opcionRespuesta);
  }

  irPerfilActua() {
    const opcionRespuesta = 2;
    return this.NavegarARespuesta(opcionRespuesta);
  }

  irSugerenciaPedagogica() {
    const opcionRespuesta = 3;
    return this.NavegarARespuesta(opcionRespuesta);
  }



  private NavegarARespuesta(opcionRespuesta: number) {
    console.log(opcionRespuesta);
    const percentil = this.resultado.Percentil;
    console.log(percentil);
    return this.router.navigateByUrl('/tabs/(test:resultado)?opcionRespuesta=' + opcionRespuesta + '&percentil=' + percentil);
  }
}
