
import express from "express";
import {addToCart, fetchCart,removeCart} from "../controller/cart.controller.js"
import { verify } from "../verificationMiddleware.js";




const router=express.Router();
router.post("/addToCart",addToCart);
router.post("/fetchCart",fetchCart);
router.post("/removecart",removeCart)


export default router;