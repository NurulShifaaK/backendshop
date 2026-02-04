import express from "express";
import { getAllProduct, getSingleProduct  , addProduct, updateProduct , deleteProduct} from "../controller/ProductController.js";
import { get } from "mongoose";
const router=express.Router();

router.route("/products").get(getAllProduct).post(addProduct)
// router.get("/product/:id",getSingleProduct);
router.route("/product/:id").get(getSingleProduct).put(updateProduct).delete(deleteProduct);

export default router;