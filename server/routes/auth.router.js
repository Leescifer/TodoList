import express from "express";
import { signUp, logIn, logOut } from "../controllers/auth.controller.js"
const router = express.Router();


router.get("/login", logIn);

router.post("/signup", signUp);

router.put("/logout", logOut);



export default router


