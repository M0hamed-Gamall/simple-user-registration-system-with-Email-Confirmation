import { Request, Response, NextFunction} from "express"
import User from "../models/user.model.js"
import asyncWrapper from "../middlewares/asyncWrapper.js"
import bcrypt from "bcrypt"
import {emailConfirmation} from "../services/emailConfirmation.js"
import jwt, { JwtPayload } from "jsonwebtoken"

interface JwtPayloadWithId extends JwtPayload {
  id: string;
}

export const addUser = asyncWrapper(async(req:Request, res: Response, next: NextFunction) => {
    const {username, password, email} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({username, password:hashedPassword, email})
    await newUser.save()
    const token = jwt.sign({id:newUser._id}, "secret", {expiresIn: "5m"})
    await emailConfirmation(email,token)
    return res.status(201).json({status: "success",data: newUser})

})

export const verifyEmail = asyncWrapper(async(req:Request, res: Response, next: NextFunction) => {
    const token = req.query.token as string
    const decoded = await jwt.verify(token, "secret") as JwtPayloadWithId

    await User.findByIdAndUpdate(decoded.id, {isVerified: true})
    return res.status(201).json({status: "success",data: {message: "email verified successfully"}})

})