const express = require('express')
require('dotenv').config()
const app = express()
const connetDB = require('./config/db')

app.get('/ping', (req, res) =>{
    try {
        res.status(200).send("Ping Working Fine")
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
            message: "Ping route is not Working Fine",
            description: error.message
        })
    }
})

app.listen(3000, (req, res) =>{
    try {
        connetDB()
        console.log("Server is Listening at Port 3000")
    } catch (error) {
        console.log(error.message)
    }
})