const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "../frontend/build")))


//import router
const product = require("./router/productRouter")
app.use("/api/v1", product)

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

//middleware error
const middlewareError = require("./middleware/error")
app.use(middlewareError)

module.exports = app