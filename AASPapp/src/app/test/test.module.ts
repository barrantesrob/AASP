import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestPage } from './test.page';
import { PreguntaEscalaComponent } from '../TipoPreguntas/pregunta-escala/pregunta-escala.component';
import { PreguntaPromedioComponent } from '../TipoPreguntas/pregunta-promedio/pregunta-promedio.component';
import { PreguntaEscolaridadComponent } from '../TipoPreguntas/pregunta-escolaridad/pregunta-escolaridad.component';
import { PreguntaActividadComponent } from '../TipoPreguntas/pregunta-actividad/pregunta-actividad.component';
import { PreguntaEscalaPromedioComponent } from '../TipoPreguntas/pregunta-escala-promedio/pregunta-escala-promedio.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TestPage }])
  ],
  declarations: [TestPage,
    PreguntaEscalaComponent,
    PreguntaPromedioComponent,
    PreguntaEscolaridadComponent,
    PreguntaActividadComponent,
    PreguntaEscalaPromedioComponent]
})
export class TestPageModule {}
