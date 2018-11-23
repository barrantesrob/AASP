import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ResultadoPage } from './resultado.page';

import { SituacionActualComponent } from '../resultado/situacion-actual/situacion-actual.component';
import { GraficoComponent } from '../resultado/grafico/grafico.component';
import { IndicadoresComponent } from '../resultado/indicadores/indicadores.component';


const routes: Routes = [
  {
    path: '',
    component: ResultadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultadoPage,
    SituacionActualComponent,
    GraficoComponent,
    IndicadoresComponent]
})
export class ResultadoPageModule {}
