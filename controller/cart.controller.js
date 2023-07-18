import { request, response } from "express";
import {Cart}from "../model/cart.model.js"

export const addToCart=async(request,response,next)=>{
  
  try{
    let cart = await Cart.findOne({userId:request.body.userId});
    if(cart){
        if(cart.cartItems.some((item)=>item.productId==request.body.productId))
          return response.status(400).json({message:"Book Already Exist In Cart"});
          cart.cartItems.push({productId:request.body.productId});
        
        let savecart = await cart.save();
        return response.status(200).json({message:"Item Added  SuccesFully In Cart"});
    }else{
        let savecart = await Cart.create({
          userId:request.body.userId,
           cartItems:[{productId:request.body.productId}]
       });
        response.status(200).json({msg:"Book Added SuccesFully In Cart",status:true})
    }

  }catch(err){
    console.log(err);
    return response.status(500).json({msg:"Inernal Server Error",status:false});
  }
}

export const fetchCart =(request,response,next)=>{
  console.log("fetch cart");
    Cart.find({userId:request.body.userId}).populate("cartItems.productId").then(result=>{
          return response.status(200).json({cart:result,status:true});
    }).catch(err=>{
      console.log(err);
        return response.status(200).json({msg:"Inernal Server Error",status:false});
    })
}

export const removeCart=async(request,response,next)=>{
  try{
  let cart=await Cart.findOne({userId:request.body.userId});

  if(cart){
    let cartItemList=cart.cartItems;
    let index=cartItemList.findIndex((item)=>item._id==request.body.id);
  
    if(index!=-1){
      cart.cartItems.splice(index,1);
      await cart.save();
      cart=await cart.populate("cartItems.productId");
      console.log(cart);
      return response.status(200).json({msg:"Product Removed Succesfully in Cart",status:true,cart});
    }else{
      return response.status(500).json({msg:"Product is Not Found in Cart",status:false});
    }
  } else {
    return response.status(400).json({ error: "Bad request", status: false });
  }
}catch(err){
  return response.status(500).json({msg:"Product is Not Found in Cart",status:false});
}
}