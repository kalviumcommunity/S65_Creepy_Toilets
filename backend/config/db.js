const mongoose = require('mongoose')

const connetDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected Successfully !!')
    } catch (error) {
        console.error("Server Error", error)
    }
}

module.exports = connetDB