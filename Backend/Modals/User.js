const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({

    username: {
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    Followers:{
        type:Array
    },
    Following:{
        type:Array
    },
    profile:{
        type:String
    }
})    

module.exports = mongoose.model("User", UserSchema); 