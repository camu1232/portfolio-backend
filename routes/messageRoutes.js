// import express from "express";
// import Message from "../models/Message.js";
// const router = express.Router();

// router.post("/messages", async (req, res) => {
//   try {
//     const newMsg = new Message(req.body);
//     await newMsg.save();
//     res.status(201).json({ message: "Mensaje guardado con éxito" });
//   } catch (err) {
//     res.status(500).json({ error: "Error al guardar el mensaje" });
//   }
// });

// export default router;

import express from "express";
import { getMessages, createMessage } from "../controllers/messageController.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/", createMessage);

export default router;