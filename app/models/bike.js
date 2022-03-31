const mongoose = require('mongoose')

const { Schema, model } = mongoose

const bikeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },{
            timestamps:true,
            toObject: { virtuals: true },
            toJSON: { virtuals: true }
        }
)

module.exports = model('Bike', bikeSchema)