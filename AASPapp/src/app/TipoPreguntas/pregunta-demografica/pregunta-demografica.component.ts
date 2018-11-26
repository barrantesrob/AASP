import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RespuestaPregunta } from '../../Servicios/respuesta_pregunta.class';
import { PaisesModelo } from '../../Servicios/paises.datos';
import * as moment from 'moment';

@Component({
  selector: 'app-pregunta-demografica',
  templateUrl: './pregunta-demografica.component.html',
  styleUrls: ['./pregunta-demografica.component.scss']
})
export class PreguntaDemograficaComponent implements OnInit {
  respuesta?: number = null;
  todasCompletadas = false;
  genero?: string;
  edad?: number;
  pais?: string;
  paises?: any;
  datosDePruba?: any;
  fechaNacimiento: any;
  @Output() finalizarEvento = new EventEmitter<any>();

  constructor( ) {
    this.paises = PaisesModelo.Paises;
  }

  ngOnInit() {
  }

  finalizar() {

    const fecha = this.fechaNacimiento;

     const fechaNacimiento =
     this.fechaNacimiento.year.text + '-' +
     this.fechaNacimiento.month.value + '-' +
     this.fechaNacimiento.day.text + 'T00:00:00';

     console.log('fechaNacimiento', fechaNacimiento);
    const datos = {
      genero : this.genero,
      datosDePruba: this.datosDePruba,
      pais : this.pais,
      fechaNacimiento: fechaNacimiento,
      edad: this.edad
    };
    this.finalizarEvento.emit(datos);
  }

  SonDatosValidos(): boolean {

    if (this.genero == null) {
      return false;
    }
    if (this.fechaNacimiento == null) {
      return false;
    }
    if (this.pais == null) {
      return false;
    }
    if (this.paises == null) {
      return false;
    }
    if (this.datosDePruba == null) {
      return false;
    }
    return true;
  }

}
