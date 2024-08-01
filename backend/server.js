const express = require("express");
const {urlencoded} = require("express")
const dotenv = require("dotenv").config() //it hides your port from others
const PORT = process.env.PORT || 5000
const errorhandler = require("./middlewares/errMid")
const connectDB = require("./config/urserDB")

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/Users", require('./routes/userRoutes'))

app.use(errorhandler)

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))
