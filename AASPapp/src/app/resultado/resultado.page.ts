import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  constructor(platform: Platform) {
    const n_id = platform.getQueryParam('id');
    console.log('n_id', n_id);

    const n_id2 = platform.getQueryParam('id2');
    console.log('n_id2', n_id2);


   }

  ngOnInit() {
    
  }

}
