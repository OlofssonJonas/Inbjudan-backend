const express = require('express')
const { mongoose } = require('mongoose')
const router = express.Router()
const { KidModel, AdultModel } = require('./model')


router.get('/kids/admin', async (req, res) => {
     const kids = await KidModel.find()
     res.status(200).json(kids)
})

router.get('/adults/admin', async (req, res) => {
     const adults = await AdultModel.find()
     res.status(200).json(adults)
})

        router.post('/kids', async (req, res) => {
    const kid = await KidModel.create(req.body)
    console.log(kid)
    res.status(201).json(kid)
})

        router.post('/adults', async (req, res) => {
            console.dir(req.ip)
    const adult = await AdultModel.create(req.body)
    console.log(adult)
    res.status(201).json(adult)
})


router.delete('/:id', async (req, res) => {
    try{
        const kid = await KidModel.deleteMany({"name": "Jonas"})
        res.status(200).json(kid)
        }catch(error) {
            res.status(404).json('hell no!')
        }
})

router.delete('/:id', async (req, res) => {
    try{
        const adult = await AdultModel.deleteMany({"name": "Jonas"})
        res.status(200).json(adult)
        }catch(error) {
            res.status(404).json('hell no!')
        }
}) 


module.exports = router