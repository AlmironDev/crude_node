import User from "../models/user.model.js";
import bycrpt from "bcryptjs";
import { createAcessToken } from "../libs/jwt.js";
export const register = async (req, res) => {
  console.log(req.body);
  const { email, password, username } = req.body;

  try {
    const passwordHash = await bycrpt.hash(password, 10);
    const newuser = new User({
      email,
      password: passwordHash,
      username,
    });
    console.log("newuser", newuser);

    const rsp = await newuser.save();
    const token = await createAcessToken({ id: rsp._id });
    res.cookie("token", token);

    // Responde con un código de estado 200 y un objeto JSON
    res.status(200).json({
      id: rsp._id,
      username: rsp.username,
      email: rsp.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const userfound = await User.findOne({ email });

    const ismatch = await bycrpt.hash(password, userfound.password);

    const token = await createAcessToken({ id: userfound._id });
    res.cookie("token", token);

    // Responde con un código de estado 200 y un objeto JSON
    res.status(200).json({
      id: userfound._id,
      username: userfound.username,
      email: userfound.email,
      password: ismatch,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};
export const profile = async (req, res) => {
  const Userfound = await User.findById(req.user.id);
  if (!Userfound)
    return res.status(401).json({ message: "Usuario no encontrado" });
  console.log(req.user);
  return res.json({
    id: Userfound._id,
    username: Userfound.username,
    email: Userfound.email,
    createdAt: Userfound.createdAt,
    updatedAt: Userfound.updatedAt,
  });
};
