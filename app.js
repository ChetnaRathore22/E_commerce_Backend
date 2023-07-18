import express from "express";
import bodyParser from "body-parser";
import db from "./database/dbconfig.js"
import userRoute from "./router/user.route.js"
import ProductRoute from "./router/product.route.js";
import CategoryRoute from "./router/category.route.js"
import CartRoute from "./router/cart.route.js"
import adminRoute from './router/adminroute.js'
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/user",userRoute);
app.use("/product",ProductRoute)
app.use("/category",CategoryRoute)
app.use("/cart",CartRoute)
app.use("/admin",adminRoute)

app.listen(3030,()=>{
    console.log("Server Started");
})