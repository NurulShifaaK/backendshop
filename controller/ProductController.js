import Product from "../models/ProductModel.js";
import APIHelper from "../helper/helperappi.js";

//create product
export const addProduct =async(req,res)=>{
const product = await Product.create(req.body);
res.status(201).json({
    message:"Product created successfully",
    product,});
}

//get all products
export const getAllProduct=async(req,res)=>{

 // const products=await Product.find();
const apiHelper = new APIHelper(Product.find(), req.query).search();
const products = await apiHelper.query;

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

//update product --Admin
export const updateProduct=async(req,res)=>{
 const id=req.params.id;

    const updatedProduct=await Product.findByIdAndUpdate(id,req.body,{new:true,runValidators:true,});
     if(!updatedProduct){
        return res.status(500).json({
            success:false,
            message:"Product not found",
        });
    }
    res.status(200).json({
        success:true,
        updatedProduct,
    })
}

//delete product --Admin

export const deleteProduct=async(req,res)=>{
    const id=req.params.id;
    const deletedProduct=await Product.findByIdAndDelete(id);   
    if(!deletedProduct){
        return res.status(500).json({
            success:false,
            message:"Product not found",
        });
    }           
    res.status(200).json({
        success:true,
        message:"Product deleted successfully",
    })
}

