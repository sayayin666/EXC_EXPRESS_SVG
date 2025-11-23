const Vehiculo = require('./vehiculo');

class Carro extends Vehiculo {
    constructor(marca, modelo, capacidad, potencia) {
        super(marca, modelo, capacidad);
        this.potencia = potencia;
    }
    consultar() {
        return `consultando el carro con marca: ${this.marca}, con modelo: ${this.modelo}, de capacidad: ${this.capacidad} litros, que tiene: ${this.potencia} HP's`
    }
    registar() {
        return `registrando el carro con marca: ${this.marca}, con modelo: ${this.modelo}, de capacidad: ${this.capacidad} litros, que tiene: ${this.potencia} HP's`
    }
    administrar() {
        return `administrando el carro con marca: ${this.marca}, con modelo: ${this.modelo}, de capacidad: ${this.capacidad} litros, que tiene: ${this.potencia} HP's`
    }
}
module.exports=Carro;