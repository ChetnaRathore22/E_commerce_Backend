import { request, response } from "express";
import { validationResult } from "express-validator";
import {User} from "../model/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";

export const signup=async(request,response,next)=>{
    try{
   !(validationResult(request))?response.status(400).json({err:"Bad Request",status:false}):request.body.password =await bcrypt.hash(request.body.password,await bcrypt.genSalt(10));
   let user = await User.create(request.body);

       return  response.status(200).json({result:user,msg:"SignUp success",status:true })
    //    return response.status(400).json({err:"Bad Request",status:false});
    }catch(err){
        console.log(err);
        return response.status(500).json({err:"Internal Server Error",status:false});
    }
}

export const signIn =async(request,response,next)=>{
    try{   
    let user =await User.findOne({email:request.body.email});
    let status=user?await bcrypt.compare(request.body.password,user.password):response.status(401).json({msg:"Unauthorized person",status:false});
    if(status){
     let token= jwt.sign({subject:user.email},process.env.SECRET_KEY);
   
     return response.status(200).json({user:{...user.toObject(),password:undefined},msg:"SignIn Success",token:token,status:true})
    }
     return response.status(401).json({err:"Unauthorized Person",status:false});  
    }catch(err){
        return response.status(500).json({err:"Internal Server Error",status:false});
    }
}

export const userList=(request,response,next)=>{
   User.find().then((result)=>{
        return response.status(200).json({userList:result,msg:"userlist"})
    }).catch((err)=>{
        return response.status(500).json({msg:"Internal Server Error"});
    })
}
