const express = require("express");
const fs = require("fs");
const { getgroups, send } = require("process");
const { User, connection } = require("./database/db.js");
const mongodb = require("mongodb");
const router = require("./routes/route.js")
const bodyParser= require("body-parser")
const authRouter = require("./routes/auth.routes")
const app = express();
const PORT = process.env.PORT || 8080
const cors = require("cors")
require("dotenv").config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 app.use(cors())


 app.use("/",router)
 app.use("/auth", authRouter)
app.listen(PORT, async () => {
    try {
      await connection;
      console.log("connection to db");
    } catch {
      console.log("failled");
    }
    console.log("server starting");
  });