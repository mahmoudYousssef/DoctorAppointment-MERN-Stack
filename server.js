import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

dotenv.config({ debug: false });
connectDB();
app.use(cors());
