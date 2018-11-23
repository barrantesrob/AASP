import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  padding = true;
  idioma = 'es';
  idiomas = [
    {
      value: 'es',
      label: 'Español'
    },
    {
      value: 'en',
      label: 'Ingles'
    }
  ];




  constructor(public alertCtrl: AlertController) { }

  selecionarIdioma(event) {
    console.log(event);
    console.log('idioma', this.idioma);
    // this.showAlertIdiona();
    // this.idioma = 'es';
    return false;
  }

/*  async showAlertIdiona() {
    const alert = await this.alertCtrl.create({
     subHeader: 'Idioma Ingles no disponoble',
      message: 'Idioma en desarrollo',
      buttons: ['OK']
    });

    await alert.present();
  }*/
}
