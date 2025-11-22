import Vehiculo from "./vehiculo";

class Camion extends Vehiculo {
    constructor(marca, modelo, capacidad, tipoCarga, numeroEjes, potencia) {
        super(marca, modelo, capacidad);
        this.elTipoDeCarga = tipoCarga;
        this.losNumerosDeEjes = numeroEjes;
        this.laPotenciaaa = potencia;
    }
    mostrarInfo() {
        return `el camion de marca: ${this.getMarca()}, tiene como modelo: ${this.getModelo()}, con una capacidad de: ${this.getCapacidad()} KG's, 
        con un tipo de carga de elemento: ${this.elTipoDeCarga}, tiene como numero de ejes: ${this.losNumerosDeEjes}, y una potencia máxima de: ${this.laPotenciaaa} NT's/mts`
    }
}
module.exports=Camion;