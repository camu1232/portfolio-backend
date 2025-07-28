import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  tecnologias: [String],
  imagen: String,
  github: String
});

export default mongoose.model("Project", projectSchema);