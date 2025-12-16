
import express from "express";
import { registrarProducto, listarProductos } from "../controllers/controladorProductos.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
    getProductsById,
    updateProduct,
    deleteProduct
} from '../controladores/controladorProductos.js'

const router = express.Router();

// GET/api/products
router.get("/", listarProductos);

// GET/api/products/:id
router.get('/:id', getProductsById)

// POST/api/products
router.post("/", authMiddleware, registrarProducto);

// PUT/api/products/:id
router.put('/:id', updateProduct)

// DELETE/api/products/:id
router.delete('/:id', deleteProduct)

export default router;

