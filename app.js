import express from "express";
import cors from "cors";
import productRoute from "./routes/productRoute.js";
import UserRoute from "./routes/UserRoute.js";
import cookieParser from "cookie-parser";
const app=express();
// app.use(cors());

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend
    credentials: true,               // allow cookies
  })
);


app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("API running");
})

app.use("/api/v1",productRoute);
app.use("/api/v1",UserRoute);

export default app;