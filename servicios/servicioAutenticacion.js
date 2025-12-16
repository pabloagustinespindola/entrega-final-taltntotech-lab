import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { crearUsuario, buscarUsuarioPorEmail } from "../models/Usuario.js";

export const servicioRegistro = async (usuarioData) => {
  const { email, password } = usuarioData;

  // Verificar si ya existe
  const usuarioExistente = await buscarUsuarioPorEmail(email);
  if (usuarioExistente) throw new Error("El usuario ya existe");

  // Hashear contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  const nuevoUsuario = await crearUsuario({
    ...usuarioData,
    password: hashedPassword,
    fechaRegistro: new Date().toISOString(),
  });

  return nuevoUsuario;
};

export const servicioLogin = async (email, password) => {
  const usuario = await buscarUsuarioPorEmail(email);
  if (!usuario) throw new Error("Usuario no encontrado");

  const esValida = await bcrypt.compare(password, usuario.password);
  if (!esValida) throw new Error("Contraseña incorrecta");

  // Generar token JWT
  const token = jwt.sign(
    { email: usuario.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { token, usuario };
};