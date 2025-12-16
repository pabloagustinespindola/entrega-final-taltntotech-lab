
import express from 'express'
import cors from 'cors'
import notFoundMiddleware from './middlewares/notFound.js'
import rutaProductos from './rutas/productos.js'
import rutaAutenticacion from './rutas/auth.js'


const app = express()

// Middlewares globales
app.use(express.json())
app.use(cors())

// Manejo de rutas desconocidas
app.use(notFoundMiddleware)

// Rutas
app.use('/api/products', rutaProductos)
app.use('/api', rutaAutenticacion)

export default app

