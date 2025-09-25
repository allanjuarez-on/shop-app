import Router from 'express'
import { deleteProductById } from '../controllers/delete.controller.js'

const router = Router()

router.delete('/:productId', deleteProductById)

export { router }