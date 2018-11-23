import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  opcionRespuesta;
  percentil: number;

  constructor(platform: Platform,
    private router: Router) {
    this.opcionRespuesta = platform.getQueryParam('opcionRespuesta');
    console.log('OpcionRespuesta', this.opcionRespuesta);

    this.percentil = +platform.getQueryParam('percentil');
    console.log('percentil', this.percentil);
    this.percentil = this.truncator(this.percentil, 1);
    console.log('percentil', this.percentil);


   }

  ngOnInit() {
  }

   truncator(num, digits) {
    const numS = num.toString(),
        decPos = numS.indexOf('.'),
        substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
        trimmedResult = numS.substr(0, substrLength),
        finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;

    return parseFloat(finalResult);
}

  regresar() {
    return this.router.navigateByUrl('/tabs/(test:test)');

  }

}
