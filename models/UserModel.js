import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const UserSchema=new mongoose.Schema({

name:{
    type:String,
    required:[true,"please enter your name"],
    maxLength:[30,"name cannot exceed 30 characters"],
    minLength:[4,"name should have more than 4 characters"],
},
email:{
    type:String,
    required:[true,"please enter your email"],
    unique:true,
    validate:[ validator.isEmail , "please enter a valid email address"],
},
password:{
    type:String,
    required:[true,"please enter your password"],
    minLength:[8,"password should be greater than 8 characters"],
    select:false,
},
 avatar:{ 
    public_id:{
        type:String,
      
    },
    url:{       
        type:String,    
        
    }
},
role:{
    type:String,
    default:"user", },

},
{timestamps:true});

// UserSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//         return next();
//     }

//     this.password = await bcryptjs.hash(this.password, 10);
//     next();
// });

UserSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcryptjs.hash(this.password, 10);
});



UserSchema.methods.getJWTToken=function(){
    return jwt.sign(
        {id:this._id}, 
         process.env.JWT_SECRET_KEY , {
        expiresIn:process.env.JWT_EXPIRE,
    });
}


UserSchema.methods.comparePassword=async function(enteredPassword){
    return await bcryptjs.compare(enteredPassword,this.password);
}   

export default mongoose.model("User",UserSchema);