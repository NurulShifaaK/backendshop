import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter name"],
    },
    description:{
        type:String,
        required:[true,"Please enter description"],
    },
    Age:{
        type:Number,
        required:[true,"Please enter age"],
        maxLength:[5,"age cannot exceed 5 digit"],
    },

    Bloodgroup:{
        type:String,
        required:[true,"Please enter blood group"],
    },

    image:[
     {
        public_id:{
            type:String,
            required:[true],
        },
        url:{
            type:String,
            required:[true],
        },
     },
    ],

    Location:{
        type:String,
        required:[true,"Please enter Location"],
    },

    PhoneNo:{
        type:Number,
        required: [true,"Please enter phone number"],
        maxLength:[10,"phone number cannot exceed 10 digit"],
    },

    Availability:{
        type:Date,
        default:Date.now,
    },

 category: {
  type: String,
  enum: ["hospital", "individual"], 
  default: "individual",
  required: true,
},

reviews:[
        {
            name:{type:String,required:true},
            rating:{type:Number,required:true},
            comment:{type:String,required:true},
        }
    ],

    createdAt:{
      type:Date,
      default:Date.now,  
    },

    })

    export default mongoose.model("Product" , productSchema);