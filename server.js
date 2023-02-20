const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const port = 2000
const Router = require('./src/router')


app.use(express.json())
    //app.use(cors)


//den här filvägen ska användas
app.use('/api/kids', Router)



async function init() {
    try {
        const options = {userNewUrlParser: true, userUnifiedTopoLogy: true}
        await mongoose.connect('mongodb://localhost:27017/Viktoria_5')
        console.log('connected to DB')
    }catch (error) {
        console.log(error)

    }


app.listen (port, () => console.log(`server is up and running on port ${port}`))
}
init()