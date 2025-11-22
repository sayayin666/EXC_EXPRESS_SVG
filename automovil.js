import Vehiculo from "./vehiculo";

class Carro extends Vehiculo {
    constructor(marca, modelo, capacidad, tipoCarga, numeroEjes, potencia) {
        super(marca, modelo, capacidad);
        this.tipoCarga = tipoCarga;
        this.numeroEjes = numeroEjes;
        this.potencia = potencia;
    }
    mostrarInfo() {
        return `el carro de marca: ${this.getMarca()}, tiene como modelo: ${this.getModelo()}, con una capacidad de: ${this.getCapacidad()} KG's, 
        con un tipo de carga de elemento: ${this.tipoCarga}, tiene como numero de ejes: ${this.numeroEjes}, y una potencia máxima de: ${this.potencia} NT's/mts`
    }
}
module.exports=Carro;