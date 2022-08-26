const express = require('express')
const bodyParser = require('body-parser')
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const port = 3000

dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello')
})

const routes = require('./src/routes/mainRouter')
app.use(routes)

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(`example app: ${port}`)
        })
    })
    .catch(err => console.log(err))
