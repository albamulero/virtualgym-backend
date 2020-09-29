const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../DB/User');
const express = require('express');
const mongoose = require('mongoose');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: "426716560354-9ctvi2rjo1o4cresni3i8agsft0h0dni.apps.googleusercontent.com",
        clientSecret: "Cz_3r7L1sUv3wkL6krn6_GFh",
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('Google account details: ', profile);

    User.findOne({googleID: profile.id})
        .then(user=>{
            if(user){
                done(null, user);
                return
            }

            User.create({googleID: profile.id})
                .then(newUser => {
                })
                .catch(err => done(err)); // Error de User.create()
        })
        .catch(err => done(err)); // Error User.findOne()


        /*
    User.findOrCreate({ googleId: profile.id }, function(err, user) {
        return done(err, user);
    });

    */

    }
));