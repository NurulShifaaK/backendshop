import express from "express";
import cors from "cors";
import productRoute from "./routes/productRoute.js";
import UserRoute from "./routes/UserRoute.js";

const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API running");
})

app.use("/api/v1",productRoute);
app.use("/api/v1",UserRoute);

export default app;