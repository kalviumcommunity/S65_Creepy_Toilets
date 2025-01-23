const express = require('express')

const app = express()

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
        console.log("Server is Listening at Port 3000")
    } catch (error) {
        console.log(error.message)
    }
})