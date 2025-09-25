import Router from 'express'
import { updateProductById } from '../controllers/update.controller.js'

const router = Router()

router.put('/:productId', updateProductById)

export { router }