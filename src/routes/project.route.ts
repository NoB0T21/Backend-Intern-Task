// register
import express from "express";
import { validate } from "../middleware/validate";
import { createProjectSchema, updateProjectSchema } from "../utils/validators/peoject.schema";
import { createProject, deleteProject, getallProject, getProjectById, updateProjectById } from "../controllers/project.controller";
import authoMiddleware from "../middleware/middleware";

const router= express.Router();

router.post("/",validate(createProjectSchema), authoMiddleware("admin", "manager"), createProject);
router.get("/", authoMiddleware("admin", "manager","worker"), getallProject);
router.get("/:id", authoMiddleware("admin", "manager","worker"), getProjectById);
router.put("/:id",validate(updateProjectSchema), authoMiddleware("admin", "manager","worker"), updateProjectById);
router.delete("/:id",authoMiddleware("admin"), deleteProject);

export default router;