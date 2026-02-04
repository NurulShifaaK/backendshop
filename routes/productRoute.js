import express from "express";
import { getAllProduct, getSingleProduct  , addProduct} from "../controller/ProductController.js";
const router=express.Router();

router.route("/products").get(getAllProduct).post(addProduct)
router.get("/product/:id",getSingleProduct);

export default router;