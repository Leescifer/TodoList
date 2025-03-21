import express from "express";
import { getAllUser, createUser, retrivedUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUser);

router.post("/", createUser);

router.get("/:userId", retrivedUser);

router.patch("/:userId", updateUser);

router.delete("/:userId", deleteUser);

export default router;