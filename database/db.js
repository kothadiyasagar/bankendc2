const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
require("dotenv").config()
const mongodb_url = process.env.MOGODB_URL 
const autoIncrement= require('mongoose-auto-increment')
const connection = mongoose.connect(mongodb_url);
const UserSchema = new Schema({
    Title:String,
     Note:String,
     Lable:String,
   

})



autoIncrement.initialize(mongoose.connection)
UserSchema.plugin(autoIncrement.plugin,'user')

const User = model("user", UserSchema);

module.exports={User,connection}