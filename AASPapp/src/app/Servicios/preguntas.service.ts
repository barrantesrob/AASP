import { Injectable } from '@angular/core';
import { PreguntasModelo } from './preguntas.modelo';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
    constructor() { }

    preguntas = PreguntasModelo.Preguntas;
    public Obtener(index: number): any {
      if (index < this.preguntas.length) {
        return this.preguntas[index];
      } else {
          return null;
      }
    }

}
