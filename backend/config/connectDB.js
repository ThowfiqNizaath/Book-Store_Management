const mongoose = require('mongoose')
const events = mongoose.connection
const connectDB = async() => {
    try{
       await mongoose.connect(process.env.MONGODB_URI);
    }catch(err){
        console.log(err.message)
    }
}

events.on('connected', () => {
    console.log("Mongodb is connected")
})
events.on('error',(err) => {
console.log(err)
})

module.exports = connectDB