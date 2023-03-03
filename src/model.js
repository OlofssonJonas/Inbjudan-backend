const mongoose = require('mongoose');

const kidSchema = mongoose.Schema({
    name: {type: String, required: true},
    content: String,
    isComing: {type: Boolean, required: true},
    created_date: {type: Date, default: Date.now}
})


module.exports = mongoose.model('kids', kidSchema)