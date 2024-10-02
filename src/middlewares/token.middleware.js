import jwt from "jsonwebtoken";
import { env } from "../config/default.js";

export const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      success: false,
      msg: "Authorization required",
    });
  }

  token = token.split(" ");

  if (token[0] !== "Bearer") {
    return res.status(401).json({
      success: false,
      msg: "Authorization required",
    });
  }

  jwt.verify(token[1], env.jwt_hash, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        success: false,
        msg: "Invalid token",
      });
    }

    req.userId = decoded.id;
    next();
  });
};
