const express = require("express")
const routerCars = require('./cars/cars-router')
const server = express()

server.use(express.json())

server.use('/api/cars', routerCars)

server.use('*', (req, res, next) => {
    next({ status: 404, message:'not found!'})
})


server.use((err,req,res,next) => { 
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server