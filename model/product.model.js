import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    discountPercentage:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    image:{
        type:String,
       }

});

export const Product = mongoose.model("product",productSchema);
