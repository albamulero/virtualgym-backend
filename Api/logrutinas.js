const express = require('express');
const mongoose = require('mongoose');
const Rutina = require('../DB/rutinas');
const User = require('../DB/user');
const Log = require('../DB/logrutinas');
const route = express.Router();

route.post('/registro', async(req, res) => {
    const { codigo, type, nombre, ejercicio } = req.body;

    // Añadir a la base de datos

    let log = {}
    log.codigo = codigo;
    log.type = type;
    log.nombre = nombre;
    log.ejercicio = ejercicio;

    let logModel = new Log(rutina);
    await logModel.save(function(err, doc) {
        if (err) return res.status(400).end();
        res.status(200).end();
    });


});

module.exports = route;