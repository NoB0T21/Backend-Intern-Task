// register
import express from "express";
import { validate } from "../middleware/validate";
import { createPDPRSchema } from "../utils/validators/dpr.schema";
import authoMiddleware from "../middleware/middleware";
import { createDpr, getDpr } from "../controllers/dpr.controller";

const router= express.Router();

router.post("/projects/:id/dpr",validate(createPDPRSchema), authoMiddleware("admin", "manager","worker"), createDpr);
router.get("/projects/:id/dpr",authoMiddleware("admin", "manager","worker"), getDpr);

export default router;