import express from "express";
import { saveProduct,list,productById,getProductByCategoryName,deleteProduct, keyword,recentProduct } from "../controller/product.controller.js";
const router = express.Router();
router.post("/saveAll",saveProduct);
router.get("/list",list);
router.get("/recentProduct",recentProduct);
router.get("/:id",productById)
router.get("/category/:categoryName",getProductByCategoryName);
router.get("/delete/:id",deleteProduct)
router.get("/search/:keyword",keyword)

export default router;