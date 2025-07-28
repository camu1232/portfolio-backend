// import express from "express";
// import Project from "../models/Project.js";

// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const proyectos = await Project.find();
//     res.json(proyectos);
//   } catch (err) {
//     res.status(500).json({ error: "Error al obtener proyectos" });
//   }
// });


// router.post("/", async (req, res) => {
//   try {
//     const nuevoProyecto = new Project(req.body);
//     await nuevoProyecto.save();
//     res.status(201).json({ message: "Proyecto guardado con éxito" });
//   } catch (err) {
//     res.status(500).json({ error: "Error al guardar el proyecto" });
//   }
// });

// export default router;

import express from "express";
import { getProjects, createProject, deleteProject } from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProject);
router.delete("/:id", deleteProject);

export default router;