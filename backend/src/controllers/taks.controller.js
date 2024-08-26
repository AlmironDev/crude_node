import Taks from "../models/taks.model.js";

export const Takss = async (req, res) => {
  const datos = await Taks.find({
    user: req.user.id,
  });
  // .populate("user") , para obtener los datos del usuario
  res.json(datos);
};

export const postTaks = async (req, res) => {
  const { title, description, date } = req.body;
  const newDato = new Taks({ title, description, date, user: req.user.id });
  const savedato = await newDato.save();
  return res.json(savedato);
};
export const getTaks = async (req, res) => {
  const dato = await Taks.findOne({
    _id: req.params.id, // Busca la tarea por su ID
    user: req.user.id, // Asegúrate de que la tarea pertenezca al usuario autenticado
  });

  if (!dato)
    return res.status(404).json({ mesage: "error de obtener dato del id" });
  res.json(dato);
};

export const deleteTaks = async (req, res) => {
  const dato = await Taks.findByIdAndDelete(req.params.id);
  if (!dato) return res.status(404).json({ mesage: "error de eliminar el id" });
  return res.sendStatus(204);
};

export const putTaks = async (req, res) => {
  const dato = await Taks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!dato) return res.status(404).json({ mesage: "error de update el id" });
  res.json(dato);
};
