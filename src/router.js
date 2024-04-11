const express = require('express')
const { mongoose } = require('mongoose')
const router = express.Router()
const { KidModel, AdultModel } = require('./model')

//GET ALL KIDS
router.get('/kids/admin', async (req, res) => {
     const kids = await KidModel.find()
     res.status(200).json(kids)
})

//GET ALL ADULTS
router.get('/adults/admin', async (req, res) => {
     const adults = await AdultModel.find()
     res.status(200).json(adults)
     console.log(adults.length)
})

//POST A NEW KID
        router.post('/kids', async (req, res) => {
    const kid = await KidModel.create(req.body)
    console.log(kid)
    res.status(201).json(kid)
})

//POST A NEW ADULT
        router.post('/adults', async (req, res) => {
            console.dir(req.ip)
    const adult = await AdultModel.create(req.body)
    console.log(adult)
    res.status(201).json(adult)
})

//DELETE ALL KIDS
router.delete('/kids/admin', async (req, res) => {
    try{
        const kid = await KidModel.deleteMany()
        res.status(200).json(kid)
        }catch(error) {
            res.status(404).json('hell no!')
        }
})

//DELETE ALL ADULTS
router.delete('/adults/admin', async (req, res) => {
    try{
        const adults = await AdultModel.deleteMany()
        res.status(200).json(adults)
        }catch(error) {
            res.status(404).json('hell no!')
        }
}) 


module.exports = router