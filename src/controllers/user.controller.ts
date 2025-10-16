import { Request, Response, NextFunction} from "express"
import User from "../models/user.model.js"
import asyncWrapper from "../middlewares/asyncWrapper.js"
import bcrypt from "bcrypt"

export const addUser = asyncWrapper(async(req:Request, res: Response, next: NextFunction)=>{
    const {username, password, email} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({username, password:hashedPassword, email})
    await newUser.save()
    return res.status(201).json({status: "success",data: newUser})

})