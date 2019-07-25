const express = require('express')
const app = express()
const router = express.Router()
//Rotas
const index = require('./routes/index')
const personRoute = require('./routes/companyRoute')
const productRoute = require('./routes/productRoute')



app.use('/', index)
app.use('/company', personRoute)
app.use('/product', productRoute)

module.exports = app;
