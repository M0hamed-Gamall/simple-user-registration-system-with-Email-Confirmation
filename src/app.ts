import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { connectDB } from "./config/db.js"

connectDB()

const app = express()
app.use(express.json())



app.listen(process.env.PORT,()=>{
    console.log("app running on port", process.env.PORT)
})