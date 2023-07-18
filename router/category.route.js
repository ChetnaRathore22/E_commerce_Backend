import express from "express";

import{saveCategory,list,deleteCategory,addCategory}from"../controller/category.controller.js";
const router = express.Router();

router.post("/add",addCategory)
router.post("/save",saveCategory);
router.get("/list",list);
router.post("/delete",deleteCategory);

export default router;