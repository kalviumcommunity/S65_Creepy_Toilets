const express = require('express')

const app = express()


app.listen(3000, (req, res) =>{
    try {
        
        console.log("Server is Listening at Port 3000")
    } catch (error) {
        console.log(error.message)
    }
})