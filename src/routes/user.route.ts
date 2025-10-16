import express from "express"
import { addUser, verifyEmail } from "../controllers/user.controller.js"

const router = express.Router()

router.post("/register", addUser)
router.get("/verify", verifyEmail)

export default router