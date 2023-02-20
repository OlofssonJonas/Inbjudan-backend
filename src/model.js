const mongoose = require('mongoose');

const kidSchema = mongoose.Schema({
    name: String
})


module.exports = mongoose.model('kids', kidSchema)