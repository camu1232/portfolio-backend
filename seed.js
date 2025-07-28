import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Project.deleteMany();

  await Project.insertMany([
    {
      titulo: "Portfolio React",
      descripcion: "Mi portfolio personal hecho con React.",
      tecnologias: ["React", "CSS"],
      imagen: "/img/portfolio.png",
      demo: "https://camila-portfolio.com",
      github: "https://github.com/camila/portfolio"
    },
    {
      titulo: "Calculadora JS",
      descripcion: "Calculadora funcional con JavaScript puro.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      imagen: "/img/calculadora.png",
      demo: "https://camila-calculadora.com",
      github: "https://github.com/camila/calculadora"
    },
    {
      titulo: "Blog Estático",
      descripcion: "Un blog con Bootstrap y diseño moderno.",
      tecnologias: ["HTML", "Bootstrap"],
      imagen: "/img/blog.png",
      demo: "https://camila-blog.com",
      github: "https://github.com/camila/blog"
    }
  ]);

  console.log("✅ Proyectos insertados");
  process.exit();
});