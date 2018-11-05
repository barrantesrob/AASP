export enum EnumClasificacion {
    Alto = 'ALTO',
    Medio = 'MEDIO',
    Bajo = 'BAJO'
}

export class Resultado {
    Clasificacion: EnumClasificacion;
    PuntajeObtenido: number;
    Percentil: number;

   private constanteBajo =  -159.196098;
   private constanteMedio = -135.605836;
   private constanteAlto =	 -123.507835;

   private coeficienteBajo =  1.09205187;
   private coeficienteMedio = 0.97337266;
   private coeficienteAlto =  0.91898428;

    constructor(clasificacion: EnumClasificacion, puntajeObtenido: number) {
        this.Clasificacion = clasificacion;
        this.PuntajeObtenido = puntajeObtenido;
        this.ObtenerPercentilAGraficar();
     }

     private ObtenerPercentilAGraficar() {
         let constante: number;
         let coeficiente: number;
         ({ constante, coeficiente } = this.ObtenerVariables(constante, coeficiente));
          this.Percentil = this.CalcularPercentilAGraficar(constante, coeficiente);
          this.Percentil = 10;
     }

     private CalcularPercentilAGraficar(constante, coeficiente) {
        const percentil =  constante + coeficiente * this.PuntajeObtenido;
        let respuesta = percentil;
        if (percentil < 0) {
            respuesta = 0;
        } else if (percentil > 100) {
            respuesta = 100;
        }
        return respuesta;
     }

    private ObtenerVariables(constante: number, coeficiente: number) {
        switch (this.Clasificacion) {
            case EnumClasificacion.Bajo: {
                constante = this.constanteBajo;
                coeficiente = this.coeficienteBajo;
                break;
            }
            case EnumClasificacion.Medio: {
                constante = this.constanteMedio;
                coeficiente = this.coeficienteMedio;
                break;
            }
            case EnumClasificacion.Alto: {
                constante = this.constanteAlto;
                coeficiente = this.coeficienteAlto;
                break;
            }
        }
        return { constante, coeficiente };
    }
}
