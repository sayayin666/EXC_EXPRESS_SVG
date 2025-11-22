import Vehiculo from "./vehiculo";

class Moto extends Vehiculo {
    constructor(marca, modelo, capacidad, tipoCarga, numeroEjes, potencia) {
        super(marca, modelo, capacidad);
        this.elTipo_deCarga = tipoCarga;
        this.losNumeros_deEjes = numeroEjes;
        this.laPotencia = potencia;
    }
    mostrarInfo() {
        return `la moto de la marca: ${this.getMarca()}, tiene como modelo: ${this.getModelo()}, una capacidad de: ${this.getCapacidad()}
        con un tipo de carga de elemento: ${this.elTipo_deCarga}, tiene como numero de ejes: ${this.losNumeros_deEjes}, y una potencia máxima de: ${this.laPotencia} NT's/mts `
    }
}
module.exports=Moto;