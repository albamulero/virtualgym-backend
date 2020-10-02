const { json, response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const { restart } = require('nodemon');
const ejercicio = require('../DB/ejercicio');
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
        if (err) return res.status(500).json({err});
        res.status(200).end();
    });

});



///// Actualizacion del ejercicio
///// Recibimos el ID....

route.post('/actualizacion', async(req, res) => { // cambiar post pr path acordarme del front
    const { ejercicio_id, codigo, titulo, type, tren, musculo, explicacion, enlacevideo } = req.body;

    let updateObj = {
        _id: ejercicio_id,
        codigo: codigo,
        titulo: titulo,
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
            res.status(200).json(result)

        }
    })


})


route.get('/buscar/:id', async(req, res) => {

    const { id } = req.params
    console.log(id)
        // Buscamos todos
    Ejercicio.findById(id)
        .then(ejercicio => res.status(200).json({ ejercicio }))
        .catch(err => res.status(500).json({ err }))

})


// Baja del ejercicio
// 200 - se dio de baja correcctamente
// 408 - Error no se pudo de dar de baja
// Recibe id

route.get('/baja/:id', async(req, res) => {

    // Find a document whose  
    // id=5ebadc45a99bde77b2efb20e and remove it 
    const { id } = req.params;
    console.log(id)


    Ejercicio.findByIdAndDelete(id)
        .then(ejercicio => res.status(200).console.log(ejercicio + 'Borrado').end())
        .catch(err => res.status(500).json({ err }))


})

route.get('/estiramientos', async(req, res) => {

    Ejercicio.find({titulo:'Estiramientos'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/calentamiento', async(req, res) => {

    Ejercicio.find({titulo:'Calentamiento'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/pesas', async(req, res) => {

    Ejercicio.find({titulo:'Pesas'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/banco', async(req, res) => {

    Ejercicio.find({titulo:'Banco'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/barra', async(req, res) => {

    Ejercicio.find({titulo:'Barra'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/ligas', async(req, res) => {

    Ejercicio.find({titulo:'Ligas'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/cuerpocompleto', async(req, res) => {

    Ejercicio.find({titulo:'Cuerpo completo'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/cuadriceps', async(req, res) => {

    Ejercicio.find({titulo:'Cuadriceps'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/gemelos', async(req, res) => {

    Ejercicio.find({titulo:'Gemelos'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/bicepsinferior', async(req, res) => {

    Ejercicio.find({titulo:'Biceps Inferior'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/gluteos', async(req, res) => {

    Ejercicio.find({titulo:'Gluteos'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/bicepssuperior', async(req, res) => {

    Ejercicio.find({titulo:'Biceps Superior'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/triceps', async(req, res) => {

    Ejercicio.find({titulo:'Triceps'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/abdominales', async(req, res) => {

    Ejercicio.find({titulo:'Abdominales'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})

route.get('/pecho', async(req, res) => {

    Ejercicio.find({titulo:'Pecho'}, function(err, result) {
        if (err) {
            res.status(408).end()
        } else {
            res.status(200).json(result)
        }
    })
})






module.exports = route;