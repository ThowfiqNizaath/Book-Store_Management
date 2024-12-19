const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB')
const bookRouter = require('./Routes/router')
const cors = require('cors')
app.use(cors())
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/books', bookRouter)
app.listen(process.env.PORT,() => {
    connectDB();
    console.log(`Listening on port ${process.env.PORT}`)
})