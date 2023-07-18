import mongoose from "mongoose";
const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        ValidityState:{
           unique:true
        },
        require:true
    },
    contact:{
        type:String,
        require:true
    }
})

export const Admin=mongoose.model('Admin',adminSchema);