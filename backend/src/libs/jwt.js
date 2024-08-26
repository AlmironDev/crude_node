import jwt from "jsonwebtoken";
import { TOKEN_SCRET } from "../config.js";
import { token } from "morgan";
export function createAcessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SCRET,
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
}
