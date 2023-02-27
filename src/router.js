const express = require('express')
const { mongoose } = require('mongoose')
const router = express.Router()
const KidModel = require('./model')


router.get('/admin', async (req, res) => {
    const kids = await KidModel.find()
    res.status(200).json(kids)
})

        router.post('/', async (req, res) => {
    const kid = new KidModel(req.body)
    await kid.save()
    res.status(201).json(kid)
})

module.exports = router