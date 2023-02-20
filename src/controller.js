
const { kidModel } = require("./model");

async function getAllKids (req, res) {
    const child = await kidModel.find()
    res.status(200).json(child)

}

async function newChild (req, res) {
const newChild = await kidModel.create(req.body)
return res.status(201).json(newChild)
}


module.exports = { getAllKids, newChild }