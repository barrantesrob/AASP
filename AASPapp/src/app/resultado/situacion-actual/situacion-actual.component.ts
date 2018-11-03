import { Component, OnInit } from '@angular/core';
import { ColorSemaforo, SemaforoDatos } from '../../Servicios/semaforo.datos';
import { RespuestasService } from '../../Servicios/respuestas.service';

@Component({
  selector: 'app-situacion-actual',
  templateUrl: './situacion-actual.component.html',
  styleUrls: ['./situacion-actual.component.scss']
})
export class SituacionActualComponent implements OnInit {
  datosSemaforo = SemaforoDatos.DatosDelSemaforo;
  constructor( public servicioRespuestas: RespuestasService) { }

  ngOnInit() {
    this.MostrarSemaforo();
  }

  MostrarSemaforo(): any {
    // console.log(this.datosSemaforo);
    for (const grupos of this.datosSemaforo) {
      // console.log(grupos);
      for (const item of grupos.Items) {
        // console.log(item);
        // console.log('item.Numero', item.Numero);
        // console.log('this.servicioRespuestas.respuestas', this.servicioRespuestas.respuestas);
        const respuestaItem = this.servicioRespuestas.respuestas.find(
          respuesta => respuesta.NumeroPregunta  === item.Numero );
          // console.log(respuestaItem);
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
  //  console.log('enumColor', enumColor);
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
  // console.log('respuesta color', respuesta);
  return respuesta;
 }
}
