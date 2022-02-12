const mongoose = require ("mongoose");

const connectDB = (db) =>{
    return mongoose.connect(db)
        .then(()=>console.log("Db connected"))
        .catch(err => {console.log(err)})
}

module.exports= connectDB
