const express = require('express')
const { mongoose } = require('mongoose')
const router = express.Router()
const KidModel = require('./model')
const assert = require('assert')


router.get('/', async (req, res) => {
    const kids = await KidModel.find()
    res.send(kids)
})

// router.post('/insert', async (req, res) => {
//     const kid = new KidModel(req.body)
//     await kid.save()
//     res.status(201).json(kid)
// })

router.post('/', function(req, res) {
    var item = {
        name: req.body.name
    }
    mongoose.connect('mongodb:localhost:27017/Viktoria_5', function(err, db) {
        assert.equal(null, err);
        db.collection('kids').insertOne(item, function(err, result) {
            assert.equal(null, error);
            console.log('item inserted')
            db.close()
        })
    })
    res.redirect('/')
})

module.exports = router