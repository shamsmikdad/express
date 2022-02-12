const express = require ("express")
const app = express()
const mongoose = require ("mongoose")
const path = require ("path");
const connectDB = require("./db/connect");
require('dotenv').config();

// const connectDB = require('./connect');

app.use(express.json());
// const service = require ("./routes/api/services")

//static path
// app.use(express.static(path.join(__dirname,'public',)))

/* config  DB 
form the .env file set the connection string for the mongobd database 
need to install the "dotenv" dep and invock it */
const db = process.env.mongoURI




//connect db and start server
const port = process.env.PORT || 3000;
//from the db folder/connect.js file have the connection function
const start = async () => {
    try {
      await connectDB(db)
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();

  
  //app.listen(port,()=>console.log(`listen on port ${port}`))

  