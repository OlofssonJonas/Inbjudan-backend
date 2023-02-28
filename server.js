const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
//console.log(process.env)

const bodyParser = require('body-parser')
const port = 2000   
const Router = require('./src/router')
const username = process.env.NAME
const password = process.env.PASSWORD
const cluster = process.env.CLUSTER
const ip = require('ip')
console.log(ip.address())

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))


app.use(express.json())


//den här filvägen ska användas
app.use('/api/kids', Router)



async function init() {
        mongoose.set('strictQuery', true);
        //const options = {userNewUrlParser: true, userUnifiedTopoLogy: true}
        let uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`
        mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopoLogy: true})
        const connection = mongoose.connection
        connection.once('open', () => {console.log('connected to DB')
        app.listen (process.env.PORT || port, () => console.log(`server is up and running on port ${port}`))
    })
}
init().catch ((err) => console.log(err) )