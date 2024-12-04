// IMPORT AND CONFIGURATION SETTINGS
const express = require('express')
const app = express()
const connectDB = require('./db')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT

// CONNECT TO DATABASE
connectDB()

//  app.use(express.json()) >>>It enables your Express app to understand and handle JSON-formatted request bodies. 
app.use(express.json())

// IMPORT ROUTER
const empRouter = require('./routes/empRouter')



app.use('/emp',empRouter)




app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})