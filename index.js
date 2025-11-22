const express = require('express');
const app = express();
const PORT = 3000;

const Moto = require('./moto');
const Carro = require('./automovil');
const Camion = require('./camion');

const carro1 = new Carro();
const moto1 = new Moto();
const camion1 = new Camion();

app.get('/')

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
    
})