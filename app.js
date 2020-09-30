require('dotenv').config();
const express = require("express");
const connectDB = require("./conexion.js");
const passport = require('passport');
const path = require('path');
const cookieSession = require('cookie-session')
var cors = require('cors')
require('./Api/passport')

var app = express()
app.use(cors({
    credentials: true,
    origin: [process.env.FRONTENDPOINT]
}))

const Port = process.env.PORT || 3000;


// Conexion a la base de datos...
connectDB()


// CookieSession
app.use(cookieSession({
    name: 'Gym-session',
    keys: ['key1', 'key2']
}))

// Definimos que vamos a recibir json
app.use(express.json({ extended: false }))

app.use(passport.initialize());
app.use(passport.session());

// Conexion para añadir un usuario...
app.use('/api/', require('./Api/User'))


// ROUTER para Ejercicios
// 

app.use('/api/ejercicio', require('./Api/crud_ejercicio'))

// ROUTER para Rutinas
//
app.use('/api/rutinas', require('./Api/crud_rutinas'))


///////////
// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login', 'email']
    }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });




// Test de añadir a la base de datos...

app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', (req, res) => res.sendFile(__dirname + '/public/build/index.html'))

app.listen(Port, () => console.log("Servidor activo"));