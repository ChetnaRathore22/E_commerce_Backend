import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"    
    },
    cartItems:[{
        productId : {
            type : mongoose.Schema.Types.ObjectId,
            ref:"product"
        }
    }]
});



export const Cart =mongoose.model("cart",CartSchema);