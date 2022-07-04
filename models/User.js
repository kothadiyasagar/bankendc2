const mongoose = require("mongoose");


const sagarSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String,
    password : String,
})

const SagarModel = mongoose.model("sagar", sagarSchema)

module.exports = SagarModel;

