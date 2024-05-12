import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.json("hello world");
});

app.use("/api/auth", authRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
