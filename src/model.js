const mongoose = require('mongoose');

const kidSchema = mongoose.Schema({
    name: {type: String, required: true},
    content: String,
    isComing: {type: Boolean, required: true},
    created_date: {type: Date, default: Date.now}
})

const adultSchema = mongoose.Schema({
    name: {type: String, required: true},
    content: String,
    isComing: {type: Boolean, required: true},
    created_date: {type: Date, default: Date.now}
})


const KidModel = mongoose.model('kids', kidSchema)
const AdultModel = mongoose.model('adults', adultSchema)

module.exports = {KidModel, AdultModel}