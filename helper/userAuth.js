
// export const verifyUser=(req,res)=>{
//     const {token}=req.cookies;
//     console.log(token);
//     if(!token){
//         return res.status(401).json({
//             success:false,
//             message:"Acess denined! Please login to access this resource"
//         })
//     }
//     const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
//     console.log(decoded);
// }

import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied! Please login",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);
      next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
