import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {
  @Input() Percentil: number;
  PercentilRedondeado;
  background = new Image();
  tamanoPorPorcentaje = 2.8;
  sumarConsolidad = -2.8;
  pasoAsumar = -1;
  canvas;
  ctx;
  timer;
  MaximoCiclos = 50;
  Maximo = 0;
  constructor() {
    this.background.src = 'assets/img/grafico.jpg';
  }

  ngOnInit() {
    // this.Percentil = 0;
    // console.log('Percentil', this.Percentil);
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    //  console.log('canvas', this.canvas);
   // console.log('ctx', this.ctx);
    const servicio = this;
    servicio.timer = window.setInterval(async () => {

      if (servicio.MaximoCiclos < servicio.Maximo) {
         window.clearInterval(servicio.timer);
        return;
      }

    //  console.log('Draw', servicio.pasoAsumar );
      const img = document.getElementById('scream');
      servicio.ctx.drawImage(img, 0, 0);
      servicio.ctx.beginPath();
      servicio.ctx.lineCap = 'round';
      
      servicio.ctx.lineWidth = 5;
      servicio.ctx.shadowBlur = 20;
      servicio.ctx.shadowColor = 'blue';
      servicio.ctx.strokeStyle = '#FF0000';
      
      
      servicio.ctx.moveTo(52 + servicio.sumarConsolidad, 50);
      servicio.ctx.lineTo(52 + servicio.sumarConsolidad, 255);
      // servicio.ctx.moveTo(332, 50); / 100%
      // servicio.ctx.lineTo(332, 255);
      servicio.ctx.stroke();
      
      if (servicio.pasoAsumar >= servicio.Percentil) {
        servicio.Maximo = servicio.Maximo + 1;
      } else {
        servicio.pasoAsumar = servicio.pasoAsumar + 1;
        servicio.sumarConsolidad = servicio.sumarConsolidad + servicio.tamanoPorPorcentaje;
      }

    }, 100);
  }
}
