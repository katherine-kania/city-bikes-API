const mongoose = require('mongoose')

const { Schema, model } = mongoose

const bikeSchema = new Schema(
    {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String
        },
        country:{
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        numStations: {
            type: Number,
        },
        ebikes: {
            type: Boolean,
            required: true
        }
    },{
            timestamps:true,
            toObject: { virtuals: true },
            toJSON: { virtuals: true }
        }
)

module.exports = model('Bike', bikeSchema)