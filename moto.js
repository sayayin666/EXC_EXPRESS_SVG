const Vehiculo = require('./vehiculo');

class Moto extends Vehiculo {
    constructor(marca, modelo, capacidad, numeroEjes) {
        super(marca, modelo, capacidad);
        this.losNumeros_deEjes = numeroEjes;
    }
    consultar() {
        return `consultando la moto con marca: ${this.marca}, con modelo: ${this.modelo}, de capacidad: ${this.capacidad} HP's, que tiene: ${this.numeroEjes} numeros de ejes`
    }
    registar() {
        return `registrando la moto con marca: ${this.marca}, con modelo: ${this.modelo}, de capacidad: ${this.capacidad} HP's, que tiene: ${this.numeroEjes} numeros de ejes`
    }
    administrar() {
        return `administrando la moto con marca: ${this.marca}, con modelo: ${this.modelo}, de capacidad: ${this.capacidad} HP's, que tiene: ${this.numeroEjes} numeros de ejes`
    }
}
module.exports=Moto;