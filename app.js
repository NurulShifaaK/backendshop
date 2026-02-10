import express from "express";
import cors from "cors";
import productRoute from "./routes/productRoute.js";
import UserRoute from "./routes/UserRoute.js";
import cookieParser from "cookie-parser";
const app=express();
// app.use(cors());

 app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://blooddonationproject-kffq.vercel.app",
    ],
    credentials: true,
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