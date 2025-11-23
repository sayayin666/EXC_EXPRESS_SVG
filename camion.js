const Vehiculo = require('./vehiculo');

class Camion extends Vehiculo {
    constructor(marca, modelo, capacidad, tipoCarga) {
        super(marca, modelo, capacidad);
        this.elTipoDeCarga = tipoCarga;
    }
    consultar() {
        return `consultando el camion de marca: ${this.marca}, con modelo: ${this.modelo}, 
        de capacidad: ${this.capacidad} KG's, que tiene como tipo de carga de elemento: ${this.tipoCarga}`
    }
    registar() {
        return `registrando el camion de marca: ${this.marca}, con modelo: ${this.modelo}, 
        de capacidad: ${this.capacidad} KG's, que tiene como tipo de carga de elemento: ${this.tipoCarga}`
    }
    administrar() {
        return `administrando el camion de marca: ${this.marca}, con modelo: ${this.modelo}, 
        de capacidad: ${this.capacidad} KG's, que tiene como tipo de carga de elemento: ${this.tipoCarga}`
    }
}
module.exports=Camion;