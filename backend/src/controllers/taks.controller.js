import Taks from "../models/taks.model.js";

export const Takss = async (req, res) => {
  try {
    const datos = await Taks.find({
      user: req.user.id,
    });
    // .populate("user") , para obtener los datos del usuario
    res.json(datos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postTaks = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newDato = new Taks({ title, description, date, user: req.user.id });
    const savedato = await newDato.save();
    return res.json(savedato);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getTaks = async (req, res) => {
  try {
    const dato = await Taks.findOne({
      _id: req.params.id, // Busca la tarea por su ID
      user: req.user.id, // Asegúrate de que la tarea pertenezca al usuario autenticado
    });

    if (!dato)
      return res.status(404).json({ mesage: "error de obtener dato del id" });
    res.json(dato);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTaks = async (req, res) => {
  try {
    const dato = await Taks.findByIdAndDelete(req.params.id);
    if (!dato)
      return res.status(404).json({ mesage: "error de eliminar el id" });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putTaks = async (req, res) => {
  try {
    console.log("datos llegados params", req.params);
    console.log("datos llegados body", req.body);

    const dato = await Taks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!dato) return res.status(404).json({ mesage: "error de update el id" });
    res.json(dato);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
