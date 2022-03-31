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
    .then(bikes => res.status(200).json({ bikes }))
    .catch(next)
})

// SHOW

// CREATE
// POST /pets
router.post('/citybikes', (req, res, next) => {
    Bike.create(req.body.bike)
    .then(bike => {
        res.status(201).json({ bike: bike.toObject() })
    })
    .catch(next)
})

// UPDATE

// REMOVE

module.exports = router