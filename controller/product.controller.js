import { request, response } from "express";
import { Product } from "../model/product.model.js";

export const saveProduct =(request,response,next)=>{
    Product.insertMany(request.body.products).then(result=>{
        return response.status(200).json({msg:"Product Saved Succesfully",status:true});
    }).catch(err=>{
        return response.status(500).json({err:"Internal Server Error",status:false});
    })
}

export const list = (request,response,next)=>{
   
    let page = parseInt(request.query.page) || 1;
    let perPage = 10;
    Product.find().skip((page-1)*10).limit(10).
    then(result=>{
        console.log(result);
        return response.status(200).json({products: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error:"Internal Server Error", status: false});
    })
}

export const productById=(request,response,next)=>{
    Product.findById(request.params.id).then(result=>{
        return response.status(200).json({product:result,status:true}).catch(err=>{
            return response.status(500).json({err:"Internal Server Error",status:false});
        })
    })
}

export const getProductByCategoryName=(request,response,next)=>{
    Product.find({category:request.params.categoryName}).then(result=>{
        return response.status(200).json({products:result,status:true}).catch(err=>{
            return response.status(500).json({err:"Internal Server Error",status:false});
        })
    })
}
 
export const deleteProduct=(request,response,next)=>{
   Product.deleteOne({id:request.params.id}).then(result=>{
        return response.status(200).json({msg:"Product Remove SuccesFully",status:true});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({err:"Internal Server Error",status:false});
    })
}

export const keyword=(request,response,next)=>{
    const regex = new RegExp(request.params.keyword, 'i');


    Product.find({
        $or:[
            { title: { $regex: regex } },
            { description: { $regex: regex } }
        ]
    }).then(result=>{
        return response.status(200).json({product:result,status:true});
    }).catch(err=>{
        return response.status(500).json({err:"Internal Server Error",status:false});
    })
}

export const recentProduct=(request,response,next)=>{
    Product.find().limit(8).then(result=>{
        return response.status(200).json({product:result,status:true});
    }).catch((err)=>{
        return response.status(500).json({msg:"Internal Server Error",status:false});
    })
}
