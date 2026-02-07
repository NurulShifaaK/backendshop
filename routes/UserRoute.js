import express from "express";
import { loginUser, register} from "../controller/UserController.js";
const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(loginUser)


export default router;