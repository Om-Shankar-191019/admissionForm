import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import studentRoutes from "./routes/student.routes.js";
import errorHandler from "./middleware/errorHandler.js";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
// routes
app.get("/", (req, res) => {
  res.json("hello world");
});

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use(errorHandler);
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
