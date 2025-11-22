class Vehiculo {
    #marca
    #modelo
    #capacidad
    constructor(marca, modelo, capacidad) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#capacidad = capacidad;
    }
    getMarca() {return this.#marca}
    getModelo() {return this.#modelo}
    getCapacidad() {return this.#capacidad}

    mostrarInfo() {
        return `el vehiculo de la marca: ${this.getMarca()}, tiene como modelo: ${this.getModelo()}, y una capacidad de: ${this.getCapacidad()} KG's`
    }
}
module.exports=Vehiculo;