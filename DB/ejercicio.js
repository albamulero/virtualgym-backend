const mongoose = require('mongoose');



/////////
// Definimos un modelo de base de datos para nuestros ejercicios
////////


const ejercicio = new mongoose.Schema({
    codigo: {
        type: String,
        require,
        unique: true
    },
    titulo: {
        type: String,
    },
    type: {
        type: String,
    },
    tren: {
        type: String,
    },
    musculo: {
        type: String,

    },
    explicacion: {
        type: String,
    },
    enlacevideo: {
        type: String,
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


module.exports = Ejercicio = mongoose.model('ejercicio', ejercicio);