export class RespuestaPregunta {
    Numero: number;
    Valor: number;
    Bajo: number;
    Medio: number;
    Alto: number;

    constructor(valor: number, pregunta: any) {
        this.Numero = pregunta.Numero;
        this.Valor = valor;
        this.Bajo = (pregunta.Bajo * valor);
        this.Medio = (pregunta.Medio * valor);
        this.Alto = (pregunta.Alto * valor);
    }
}
