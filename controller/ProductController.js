import Product from "../models/ProductModel.js";
//create product
export const addProduct =async(req,res)=>{
const product = await Product.create(req.body);
res.status(201).json({
    message:"Product created successfully",
    product,});
}

//get all products
export const getAllProduct=async(req,res)=>{
    const products=await Product.find();
    res.status(200).json({
        success:true,
        products,});
};

//get single product details
export const getSingleProduct=async(req,res)=>{
    const id=req.params.id;
    let product=await Product.findById(id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found",
        });
    }
    res.status(200).json({
        success:true,
        product,
    })
}