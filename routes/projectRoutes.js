import express from "express";
import { getProjects, createProject, deleteProject } from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProject);
router.delete("/:id", deleteProject);

export default router;