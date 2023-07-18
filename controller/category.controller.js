import { request, response } from "express";
import {Category }from "../model/category.model.js";

export const saveCategory=async(request,response,next)=>{
    console.log(request.body)
    try {
       
      for (let category of request.body.categories) {
       let result=   await Category.create({ categoryName: category })
      }
      return response.status(200).json({message: "Category Saved", status: true });
  } catch (err) {
    console.log(err);
      return response.status(500).json({ message: "Internal Server Error", status: false });
  }
}


export const list =(request,response,next)=>{
  Category.find().then(result=>{
      return response.status(200).json({list:result,status:true})}).catch(err=>{
          return response.status(500).json({err:"Internal Server Error",status:false});
      })
}

export const deleteCategory =(request,response,next)=>{
  Category.deleteOne({_id:request.body.categoryId}).then(result=>{
      return response.status(200).json({status:true,msg:"Remove Category SuccesFully "})})
      .catch(err=>{
        console.log(err);
          return response.status(500).json({err:"Internal Server Error",status:false});
      })
}


export const addCategory=(request,response,next)=>{
    Category.create({categoryName:request.body.categoryName}).then(result=>{
      return response.status(200).json({msg:"Category Saved",status:true,category:result});

    }).catch(err=>{
      return response.status(500).json({err:"Internal Server Error",status:false});
    })
}