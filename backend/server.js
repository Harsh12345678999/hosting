const app = require("./app")
const dotenv = require("dotenv")
dotenv.config({path:"backend/config/config.env"})

//mongodb connection
const connecteDatabase = require("./config/database")
connecteDatabase()

//server connection
app.listen(process.env.PORT, () => {
    console.log(`Server is connected with http://localhost:${process.env.PORT}`)
})