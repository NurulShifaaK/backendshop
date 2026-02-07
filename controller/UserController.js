import User from "../models/UserModel.js";
//register
export const register=async(req,res,next)=>{
const {name,email,password}=req.body;

if(!name || !email || !password){
    return res.status(400).json({
        success:false,
        message:"Please enter all fields"
    })
}

const registereduser=await User.create({
    name,
    email,
    password,
});

const token=registereduser.getJWTToken();

res.status(201).json({
    success:true,
    registereduser,
    token,
})
};

export const loginUser=async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"Fields cannot be empty"
        })
    }

    const user=await User.findOne({email}).select("+password"); //if password is needed!!
     const isValidPassword= true;
     
     if(!isValidPassword){
        return res.status(401).json({
            success:false,  
            message:"Invalid email or password"
        })
     }
    res.json({success:true,user})
}