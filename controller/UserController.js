import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

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

// const token=registereduser.getJWTToken();

res.status(201).json({
    success:true,
    registereduser,
    // token,
})
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",

    });
  }

  const user = await User.findOne({ email }).select("+password");


  // 🔥 THIS WAS MISSING
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  // 🔐 Password check
  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const token = user.getJWTToken();

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // true in production
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    user,
    token,
  });
};
