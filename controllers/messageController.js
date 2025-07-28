import Message from "../models/Message.js";

export const getMessages = async (req, res) => {
  try {
    const mensajes = await Message.find();
    res.json(mensajes);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener mensajes" });
  }
};

export const createMessage = async (req, res) => {
  try {
    const nuevoMensaje = new Message(req.body);
    await nuevoMensaje.save();
    res.status(201).json({ message: "Mensaje guardado con éxito" });
  } catch (err) {
    res.status(500).json({ error: "Error al guardar el mensaje" });
  }
};
