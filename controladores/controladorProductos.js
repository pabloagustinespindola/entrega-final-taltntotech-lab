//ontroladores: logica de negocio

import { servicioCrearProducto, servicioObtenerProductos} from "../servicios/servicioProductos.js"

export const registrarProducto = async (req, res) => {
    try {
        const nuevoProducto = await servicioCrearProducto(req.body)
        res.status(201).json(nuevoProducto)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const listarPorductos = async (req, res) => {
    try {
        const productos = await servicioObtenerProductos()
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getProducts = (req, res) => {
    res.json([{id: 1, name: 'Producto A'}, {id: 2, name: 'Producto B'}])
}

export const getProductsById = (req, res) => {
    const { id } = req.params
    res.json({id, name: `Producto ${id}` })
}

export const createProduct = (req, res) => {
    const product = req.body
    res.status(201).json({ message: 'Producto creado', product })
}

export const updateProduct = (req, res) => {
    const { id } = req.params
    const product = req.body
    res.json({ message: `Producto ${id} actualizado`, product }) 
}

export const deleteProduct = (req, res) => {
    const { id } = req.params
    res.json({ message: `Producto ${id} eliminado`})
}
