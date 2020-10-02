const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


/////////
// Definimos un modelo de base de datos para nuestros usuarios
////////


const user = new mongoose.Schema({
    nombre: {
        type: String,

    },
    apellidos: {
        type: String,

    },
    email: {
        type: String,
        unique: true

    },
    coach: String,
    password: { type: String },
    alta: { type: Date, default: Date.now },
    googleID: { type: String },
    facebookID: { type: String }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

//////////
// Esta funcion se ejecutara siempre antes de que se ejecute .save()
// Encriptamos la contraseña...
//////////
/*
user.pre('save', function(next) {
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password, salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

*/


module.exports = User = mongoose.model('user', user);