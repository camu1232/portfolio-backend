import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const proyectos = await Project.find();
    res.json(proyectos);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener proyectos" });
  }
};

export const createProject = async (req, res) => {
  try {
    const nuevoProyecto = new Project(req.body);
    await nuevoProyecto.save();
    res.status(201).json({ message: "Proyecto guardado con éxito" });
  } catch (err) {
    res.status(500).json({ error: "Error al guardar el proyecto" });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.json({ message: "Proyecto eliminado con éxito" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar el proyecto" });
  }
};
