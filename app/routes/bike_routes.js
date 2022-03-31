/// IMPORT /// dependecies, middleware and models ///
const express = require('express')
const passport = require('passport')
const Bike = require('../models/bike')
const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const requireToken = passport.authenticate('bearer', { session: false })
const removeBlanks = require('../../lib/remove_blank_fields')

const router = express.Router()

///////////////////////
/// ROUTES GO HERE ///
/////////////////////

// INDEX
// GET /citybikes
router.get('/citybikes', (req, res, next) => {
    Bike.find()
    .then(bikes => {
        return bikes.map(bike => bike.toObject())
    })
    .then(bike => res.status(200).json({ bikes }))
    .catch(next)
})

// SHOW

// CREATE

// UPDATE

// REMOVE