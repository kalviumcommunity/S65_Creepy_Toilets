const mongoose = require('mongoose')

const connetDB = async () =>{
    try {
        await mongoose.connect()
    } catch (error) {
        
    }
}