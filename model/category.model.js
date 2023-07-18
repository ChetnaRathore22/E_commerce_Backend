import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String
        
    }
})

export const Category = mongoose.model('category',categorySchema);