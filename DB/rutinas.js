const mongoose = require('mongoose');
var Schema = mongoose.Schema
var Ejercicio = mongoose.model('ejercicio');


const rutina = new mongoose.Schema({
    codigo: {
        type: String,
        require,
        unique: true
    },
    type: {
        type: String,
    },
    nombre: {
        type: String,
    },
    tren: {
        type: String,
    },
    ejercicio: {
        type: Schema.ObjectId,
        ref: "Ejercicio"
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

module.exports = Rutinas = mongoose.model('rutina', rutina);