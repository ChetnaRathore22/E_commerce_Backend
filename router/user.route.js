import express from "express";
import { signup,signIn,userList} from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signUp",body("name","Name Must Be Required").notEmpty(),
body("password","password Must Be Required").notEmpty(),
body("contact","contact Must Be Required").notEmpty(),
body("email","Email Must be Required"),body("email","please Enter correct email"),signup);

router.post("/signin",signIn);
router.get("/list",userList);

export default router;