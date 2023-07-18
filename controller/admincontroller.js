import bcrypt from 'bcryptjs'
import  jwt  from 'jsonwebtoken';
import { Admin } from '../model/adminmodel.js';
export const signup=async(request,response,next)=>{
    try{
  console.log(request.body);
  request.body.password=await bcrypt.hash(request.body.password,await bcrypt.genSalt(16));
  let admin =await Admin.create(request.body);
  return response.status(200).json({msg:"ADmin signUp succesfully",result:admin,status:true});
    }catch(err){
        return response.status(500).json({msg:"Internal Server Error",status:false});
    }
}

export const signIn=async(request,response,next)=>{
    try{
  let admin =await Admin.findOne({email:request.body.email});
 let status= admin?bcrypt.compare(request.body.password,admin.password):response.status(403).json({msg:"unautorized Person",status:false});
 if(status){
  let token=  jwt.sign({subject:request.body.email},'adminkeybcrypted');
  return response.status(200).json({msg:"admin sign in succesfully",admin:{...admin.toObject(),password:undefined},token})
 }
  return response.status(403).json({msg:"Unauthorized Person",status:false})
}catch(err){
    console.log(err);
    return response.status(500).json({msg:"Internal Server Error",status:false})
}
}