import { Component, OnInit, Input } from '@angular/core';
import { Indicadores } from '../../Servicios/indicadores.datos';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {
 @Input() Percentil: number;
 Indicador: any;

 constructor(public alertCtrl: AlertController) {
}

ngOnInit() {
  const decil = Math.floor(this.Percentil / 10);
  const indicadores = Indicadores.Datos;
  this.Indicador = indicadores.find( item => item.Decil === decil);
  console.log('this.Indicador', this.Indicador);
  }

  mostrarIndicador(index) {
    this.showAlert(index);
  }

  async showAlert(index) {
    const indexImg = index + 1;
    const alert = await this.alertCtrl.create({
      // subHeader: 'subHeader',
      message: '<img src="assets/img/formula' + indexImg + '.JPG">',
      buttons: ['OK']
    });

    await alert.present();
  }

}
