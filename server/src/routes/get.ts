import Router from 'express'
import { getAllProducts, getProductById } from '../controllers/get.controller.js'

const router = Router()

router.get('/', getAllProducts)
router.get('/:productId', getProductById)

export { router }