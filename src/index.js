const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb+srv://confit-dev:HoracioDeveloper@cluster0-vusb6.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use(require('./routes'))

app.listen(3333);