import { Component, OnInit, Input } from '@angular/core';
import { Indicadores } from '../../Servicios/indicadores.datos';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {
 @Input() Percentil: number;
 Indicador: any;

 constructor() {
}

ngOnInit() {
  console.log('this.Percentil', this.Percentil);
  const decil = Math.floor(this.Percentil / 10);
  console.log('decil', decil);
  const indicadores = Indicadores.Datos;
  console.log('indicadores', indicadores);
  this.Indicador = indicadores.find( item => item.Decil === decil);
  console.log('Indicador', this.Indicador);
  }

}
