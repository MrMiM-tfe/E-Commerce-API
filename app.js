const express = require('express')
const app = express()
const config = require("./config.json")
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
const routes = require("./routes")

// Contect to database
mongoose.connect(config.AppInfo.dbURL).then((result) => {
    app.listen(config.AppInfo.port)
    console.log(`Server is listening  on port ${config.AppInfo.port}`);
})

// some middlewares
app.use(express.static(config.AppInfo.staticDir))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use(routes)