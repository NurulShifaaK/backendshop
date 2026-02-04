import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect(process.env.DB_URL).then((data)=>{
    console.log("Mongodb Connected",data.connection.host)
})
.catch((err)=>{
    console.log(err.message)
});
}