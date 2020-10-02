const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const route = express.Router();

// Bcrypt to encrypt passwords

const bcrypt = require('bcrypt');
const user = require('../DB/User');
const { restart } = require('nodemon');
const bcryptSalt = 10;



route.post('/adduser', async(req, res) => {
    const { nombre, apellidos, email, password } = req.body


    // Añadimos a la base de datos...

    let user = {};
    user.nombre = nombre;
    user.apellidos = apellidos;
    user.email = email;
    user.password = bcrypt.hashSync(password, bcryptSalt);
    let userModel = new User(user);
    await userModel.save(function(err, doc) {
        if (err) return res.status(400).end();
        res.status(200).end();
    });

})
route.post('/login', async(req, res) => {

    var email = req.body.email;
    var password = req.body.password;


    User.findOne({ email: email }, function(err, usuario) {
        if (err) { res.status(400).end() }
        if (!usuario) {
            res.status(400).end()
        }

        //Comprobar la contraseña
        //if (bcrypt.compareSync(password, usuario.password)) { res.status(200).end() } else { res.status(400).end() }

    })



})


module.exports = route;