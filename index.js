const express = require('express');
const app = express();
const PORT = 3000;

const Moto = require('./moto');
const Carro = require('./automovil');
const Camion = require('./camion');



app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
    
})