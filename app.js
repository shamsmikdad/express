const express = require ("express")
const app = express()
const mongoose = require ("mongoose")
const path = require ("path")
require('dotenv').config();

// const connectDB = require('./connect');

app.use(express.json());
// const service = require ("./routes/api/services")

//static path
// app.use(express.static(path.join(__dirname,'public',)))

//config  DB
    //const db = require("./db/URI").mongoURI
    const db = process.env.mongoURI
//connect db

const port = process.env.PORT || 3000;

//app.listen(port,()=>console.log(`listen on port ${port}`))

const start = async () => {
    try {
      await mongoose
        .connect(db)
        .then(()=>{console.log("connect to db ")})
        .catch(err => {console.log(err)});
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
  