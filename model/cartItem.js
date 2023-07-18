import mongoose from "mongoose";
const cartItemsSchema =new mongoose.Schema({
    cartId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"cart"
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"product"
    }
});

export const cartItems=mongoose.model("cartItem",cartItemsSchema);