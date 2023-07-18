import jwt from 'jsonwebtoken'
export const verify=async(request,response,next)=>{
    console.log(request.headers);
    try{
    let token= await request.headers.authorization;
   if(!token)
     throw new console.error();
     jwt.verify(token,process.env.SECRET_KEY);
     next();
    }catch(err){
        return response.status(500).json({error:"Unauthorized person",status:false})
    }
}