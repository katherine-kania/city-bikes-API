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
// GET /citybikes/<id>
router.get('/citybikes/:id', (req, res, next) => {
    const bikeId = req.params.id
    Bike.findById(bikeId)
        .then(handle404)
        .then(bike => res.status(200).json({ bike: bike.toObject() }))
        .catch(next)
})

// CREATE
// POST /citybikes
router.post('/citybikes', (req, res, next) => {
    Bike.create(req.body.bike)
    .then(bike => {
        res.status(201).json({ bike: bike.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /citybikes/<id>
router.patch('/citybikes/:id', (req,res, next) => {
    Bike.findById(req.params.id)
        .then(handle404)
        .then(bike => {
            return bike.updateOne(req.body.bike)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// REMOVE
// DELETE /citybikes/<id>
router.delete('/citybikes/:id', (req, res, next) => {
    Bike.findById(req.params.id)
        .then(handle404)
        .then(bike => {
            bike.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router