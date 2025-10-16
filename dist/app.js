import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";
connectDB();
const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use((req, res, next) => {
    res.status(404).json({ status: "error", message: "Not Found" });
});
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ code: err.statusCode || 500, status: err.statusText || "error", message: err.message });
});
app.listen(process.env.PORT, () => {
    console.log("app running on port", process.env.PORT);
});
