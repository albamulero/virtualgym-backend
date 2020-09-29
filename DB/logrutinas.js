const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usuario = mongoose.model('User');
var ejercicio = mongoose.model('ejercicio');


const logrutina = new mongoose.Schema({
    ejercicio: {
        ejercicio: {
            type: Schema.ObjectId,
            ref: "ejercicio"
        },
    },
    usuario: {
        user: { type: Schema.ObjectId, ref: "User" }
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

module.exports = Logrutinas = mongoose.model('logrutina', logrutinas);