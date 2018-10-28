export class RespuestaPregunta {
    NumeroPregunta: number;
    Opcion: number;
    Valor: number;
    Bajo: number;
    Medio: number;
    Alto: number;

   constructor(valor: number, opcion: any, pregunta: any) {
        this.NumeroPregunta = pregunta.Numero;
        this.Opcion = opcion;
        this.Valor = valor;
        this.Bajo = (pregunta.Bajo * valor);
        this.Medio = (pregunta.Medio * valor);
        this.Alto = (pregunta.Alto * valor);
    }
}
