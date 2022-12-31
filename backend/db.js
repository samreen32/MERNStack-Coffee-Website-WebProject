const mongoose = require('mongoose');           //importing mongoose in express.
const mongoURI = 'mongodb://localhost:27017/coffee'      //for creating db file of name '/coffee' in monogose. 

const connectToMongo = ()=>{

    mongoose.connect(mongoURI, ()=>{
        console.log("Connected To Mongoose Successfully");
    })
}

module.exports = connectToMongo; 