const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const logger = require('morgan')

const blogRouter = require('./routes/blog.js')
const contactRouter = require('./routes/contact.js')
const magazineRouter = require('./routes/magazine.js')
const errHandler = require('./utils/globalErrorHandler.js')

require('express-async-errors')
require('dotenv').config()
const { PORT, DB_URI, WEBSITE_MAIL, TEST_MAIL, WEBSITE_MAIL_PASS } = process.env

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use('/blog', blogRouter)
app.use('/contact', contactRouter)
app.use('/magazine', magazineRouter)

app.use(errHandler)

const serverSpin = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        app.listen(PORT, listening)
    } catch (err) {
        console.log('Error on Spinning the server\n', err)
    }
}

function listening() {
    console.log(`Listening on port ${PORT}... `)
}

serverSpin()






