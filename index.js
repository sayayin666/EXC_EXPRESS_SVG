const express = require('express');
const app = express();
const PORT = 3000;

const Moto = require('./moto');
const Carro = require('./automovil');
const Camion = require('./camion');

const carro1 = new Carro("ferrari", "purecontrol", 256, 600);
const moto1 = new Moto("yamaha", "z1000", 720, 4);
const camion1 = new Camion("wolksvaggen", "m301ts", 1500, "madera");

app.get('/camion', (req, res) => {
    res.send(camion1.consultar())
})

app.get('/', (req, res) => {
    res.send("esta es la ruta raiz");
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
    
})