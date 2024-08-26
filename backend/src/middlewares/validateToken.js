import jwt from "jsonwebtoken";
import { TOKEN_SCRET } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({ message: "No token , no autorizado" });
  jwt.verify(token, TOKEN_SCRET, (erro, userDat) => {
    if (erro) return res.status(401).json({ message: "Token Invvalido" });
    console.log("UserData", userDat);
    req.user = userDat;
    next();
  });
};
