const mongoose = require("mongoose")
const connecteDatabase = () => {
    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log(`mongodb is connected with ${data.connection.host}`)
    })
}

module.exports = connecteDatabase