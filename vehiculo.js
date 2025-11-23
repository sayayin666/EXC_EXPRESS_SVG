class Vehiculo {
    #marca
    #modelo
    #capacidad
    constructor(marca, modelo, capacidad) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#capacidad = capacidad;
    }
    get marca() {
        return this.#marca
    }
    set marca(valor) {
        return this.#marca = valor
    }


    get modelo() {
        return this.#modelo
    }
    set modelo(valor) {
        return this.#modelo = valor
    }


    get capacidad() {
        return this.#capacidad
    }
    set capacidad(valor) {
        return this.#capacidad = valor
    }


    consultar() {
        return `el vehiculo consultado tiene como marca: ${this.#marca}, como modelo: ${this.#modelo}, y una capacidad de: ${this.#capacidad} KG's`
    }

    registar() {
        return `el vehiculo consultado tiene como marca: ${this.#marca}, como modelo: ${this.#modelo}, y una capacidad de: ${this.#capacidad} KG's`
    }

    administrar() {
        return `el vehiculo consultado tiene como marca: ${this.#marca}, como modelo: ${this.#modelo}, y una capacidad de: ${this.#capacidad} KG's`
    }
}
module.exports=Vehiculo;