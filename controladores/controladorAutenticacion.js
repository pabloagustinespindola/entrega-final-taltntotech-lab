
import jwt from 'jsonwebtoken'

import { servicioRegistro, servicioLogin } from "../services/servicioAutenticacion.js";

export const registrarUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await servicioRegistro(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, usuario } = await servicioLogin(email, password);
    res.status(200).json({ token, usuario });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const loginUser = (req, res) => {
    const { username, password} = req.body

    if (username === 'admin' && password === '1234') {
        const token = jwt.sign(
            { username },
            process.env.JWT_SECRET,
            { expireIn: '2h'}
        )
        res.json({ token })
    } else {
        res.status(401).json({ error: 'Credenciales invalidas'})
    }
}

