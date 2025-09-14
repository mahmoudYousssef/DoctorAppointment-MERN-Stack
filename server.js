import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import User from "./routes/user.js";
const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(cors());
app.use("/user", User);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
