const express = require('express')
const { mongoose } = require('mongoose')
const router = express.Router()
const KidModel = require('./model')


router.get('/admin', async (req, res) => {
    const kids = await KidModel.find()
    res.status(200).json(kids)
})

        router.post('/', async (req, res) => {
    const kid = await KidModel.create(req.body)
    console.log(req.body)
    res.status(201).json(kid)
})


router.delete('/:id', async (req, res) => {
    const kid = await KidModel.findByIdAndDelete(req.params.id)
    if(!req.params.id) {
        res.send('Noway')
    }
        res.status(200).json(`Successfully deleted ${req.params.id}`)
}) 


module.exports = router