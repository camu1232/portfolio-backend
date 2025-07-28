// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import projectRoutes from "./routes/projectRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 3000;

// app.use("/api/proyectos", projectRoutes);
// app.use("/api/mensajes", messageRoutes);

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("Conectado a MongoDB");
//     app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
//   })
//   .catch(err => console.error(err));

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/proyectos", projectRoutes);
app.use("/api/mensajes", messageRoutes);
app.use("/public", express.static("public"));

console.log("Iniciando servidor...");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => {
    console.error("Error conectando a MongoDB:", err.message);
  });