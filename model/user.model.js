import mongoose, { model } from "mongoose";
const  userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

export const User = mongoose.model("user",userSchema);