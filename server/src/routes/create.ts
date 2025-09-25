import Router from 'express'
import { createProduct } from '../controllers/create.controller.js'

const router = Router()

router.post('/', createProduct)

export { router }