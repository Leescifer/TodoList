import express from "express";
import { getAllUser, retrivedUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUser);

router.get("/:userId", retrivedUser);

router.patch("/:userId", updateUser);

router.delete("/:userId", deleteUser);

export default router;