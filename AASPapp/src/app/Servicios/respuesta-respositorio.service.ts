import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespuestaRespositorioService {

  preguntasURL = 'https://aaspapp-45ec4.firebaseio.com/Preguntas.json';
  constructor(private _http: HttpClient) {
    console.log('hola');

  }

  GurdarPregunta(dato: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   /* const dato: any = {
      Pregunta: 1,
      respuesta: 1.1
    };*/

    return this._http
      .post(this.preguntasURL, dato, { headers } )
      .pipe(map((data) => {  }),
        catchError(error => { console.log(error); return throwError(error); }));
  }




}
