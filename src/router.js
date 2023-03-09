const express = require('express')
const { mongoose } = require('mongoose')
const router = express.Router()
const KidModel = require('./model')


router.get('/admin', async (req, res) => {
    const kids = await KidModel.find()
    res.status(200).json(kids)
})

        router.post('/', async (req, res) => {
            console.dir(req.ip)
    const kid = await KidModel.create(req.body)
    console.log(kid )
    res.status(201).json(kid)
})


router.delete('/:id', async (req, res) => {
    try{
        const kid = await KidModel.deleteMany({"name": "Jonas"})
        res.status(200).json(kid)
        }catch(error) {
            res.status(404).json('hell no!')
        }
}) 


module.exports = router