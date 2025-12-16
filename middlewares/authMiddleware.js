// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const token = authHeader.split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Formato de token inválido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // Guardamos info del usuario en la request
    next();
  } catch (error) {
    return res.status(403).json({ error: "Token inválido o expirado" });
  }
};