const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        trim:true,
    },
    
    email: {
        type:String,
        required:true,
        trim:true,
    },
    password: {
        type:String,
        required:true,
    },
    weight : {
        type : Number,
        required:true
    },

    height : {
         
        type : Number,
        required : true
    },

    sex : {

        type : String,
        required : true
    },
    
    allergens :[{


        type : String,
        required : true

    }]



});

module.exports = mongoose.model("User", userSchema);