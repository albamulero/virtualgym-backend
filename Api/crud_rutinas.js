const express = require('express');
const mongoose = require('mongoose');
const Rutina = require('../DB/rutinas');
const route = express.Router();




route.post('/alta', async(req, res) => {
    const { codigo, type, nombre, ejercicio } = req.body;


    // Añadir a la base de datos
    /*
        let rutina = {}
        rutina.codigo = codigo;
        rutina.type = type;
        rutina.nombre = nombre;
        rutina.ejercicio = ejercicio;
    */
    

    let rutina = {}
    rutina.codigo = '012';
    rutina.type = 'Type';
    rutina.nombre = 'Fuerza explosiva';
    rutina.ejercicio = '5f753c5c0236a2c88b764ca5';

    let rutinaModel = new Rutina(rutina);

    await rutinaModel.save(function(err, doc) {
        if (err) return res.status(400).end();
        res.status(200).end();
    });


});



///// Actualizacion del ejercicio
///// Recibimos el codigo del ejercicio....

route.post('/actualizacion', async(req, res) => {
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
    // Si ya existe responde con 400

    Rutina.findByIdAndUpdate({ _id: ejercicio_id }, updateObj, { new: true },

        function(err, model) {
            if (err) {

                res.status(400).end()
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
    let ejercicios = Rutina.find({}, function(err, result) {
        if (err) {
            res.send(408).end()
        } else {
            res.send(result)
        }
    })


})


// Baja del ejercicio
// 200 - se dio de baja correcctamente
// 408 - Error no se pudo de dar de baja

route.get('/baja', async(req, res) => {

    // Find a document whose  
    // id=5ebadc45a99bde77b2efb20e and remove it 
    const { ejercicio_id } = req.body;

    User.findByIdAndDelete({
            _id: ejercicio_id
        },
        function(err, docs) {
            if (err) {
                console.log(err)
                res.send(408).end()
            } else {
                res.send(200).end();
            }
        });


})



module.exports = route;