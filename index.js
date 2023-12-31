const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const personRoutes =require('./controllers/person')

const app = express()

//MIDDLEWARE
app.use(express.json())

//ROUTES
app.use('/person',personRoutes)

// db connection - have to connect data base 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on ${PORT}`))