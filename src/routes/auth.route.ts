// register
import express from "express";
import {loginUser, register } from "../controllers/auth.controller";
import { validate } from "../middleware/validate";
import { registerUserSchema } from "../utils/validators/user.schema";

const router= express.Router();

router.post("/register",validate(registerUserSchema), register);
router.post("/login", loginUser)
export default router;