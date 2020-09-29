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
const bcryptSalt = 10;



route.post('/adduser', async(req, res) => {
    const { nombre, apellidos, email, password } = req.body;

    // Copromobar que que esten los campos
    //if (!email || !passport) {
        //res.status(500).end();
        //return;
    //}


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

route.get('/login', (req, res) => {
    const { email, password } = req.body;

    // Copromobar que que esten los campos
    if (!email || !passport) {
        res.render('auth/login', { errorMessage: 'Introducir email y password' });
        return;
    }

    // Vamos a buscar si ya se registro...



});






module.exports = route;