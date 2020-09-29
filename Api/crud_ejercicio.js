const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Ejercicio = require('../DB/ejercicio');
const route = express.Router();


route.post('/alta', async(req, res) => {
    const { codigo, titulo, type, tren, musculo, explicacion, enlacevideo } = req.body;


    let ejercicio = {}
    ejercicio.codigo = codigo;
    ejercicio.titulo = titulo;
    ejercicio.type = type;
    ejercicio.tren = tren;
    ejercicio.musculo = musculo;
    ejercicio.explicacion = explicacion;
    ejercicio.enlacevideo = enlacevideo;

    let ejercicioModel = new Ejercicio(ejercicio);

    await ejercicioModel.save(function(err, doc) {
        if (err) return res.status(400).end();
        res.status(200).end();
    });

});



///// Actualizacion del ejercicio
///// Recibimos el ID....

route.post('/actualizacion', async(req, res) => { // cambiar post pr path acordarme del front
    const { ejercicio_id, codigo, type, tren, musculo, explicacion, enlacevideo } = req.body;

    let updateObj = {
        _id: ejercicio_id,
        codigo: codigo,
        type: type,
        tren: tren,
        musculo: musculo,
        explicacion: explicacion,
        enlacevideo: enlacevideo
    }


    // Comprobar que el ejercico no existe...
    // Si ya existe responde con 408
    Ejercicio.findByIdAndUpdate({ _id: ejercicio_id }, updateObj, { new: true },

        function(err, model) {
            if (err) {

                res.status(408).end()
                return
            } else {

                res.status(200).end()
                return
            }
        });



});


//
// Listado
// Devuelve todo el contenido de la base de datos
//

route.get('/listado', async(req, res) => {



    // Buscamos todos
    let ejercicios = Ejercicio.find({}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
          //  res.status(200).json({ ejercicios }).end()
          res.status(200).json(result )

        }
    })


})


// Baja del ejercicio
// 200 - se dio de baja correcctamente
// 408 - Error no se pudo de dar de baja
// Recibe id

route.delete('/baja', async(req, res) => {

    // Find a document whose  
    // id=5ebadc45a99bde77b2efb20e and remove it 
    const { ejercicio_id } = req.body;

    Ejercicio.findByIdAndDelete({
            _id: ejercicio_id
        },
        function(err, docs) {
            if (err) {
                res.status(408).end()
            } else {
                res.status(200).end();
            }
        });


})



module.exports = route;