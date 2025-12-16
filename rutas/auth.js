import { Router } from 'express'
import { loginUser } from '../controladores/controladorProductos.js'

const router = Router()

// POST/api/login
router.post('./login', loginUser)

export default router