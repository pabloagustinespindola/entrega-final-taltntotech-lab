import { crearProducto, obtenerProductos} from "../modelos/Producto.js"

export const servicioCrearProducto = async (productoData) => {

    if(!productoData.nombre || !productoData.precio) {
        throw new Error("El producto debe tener nombre y precio")
    }

    const nuevoProducto = await crearProducto(productoData)
    return nuevoProducto
}

export const servicioObtenerProductos = async () => {
    const productos = await obtenerProductos()
    return productos
}