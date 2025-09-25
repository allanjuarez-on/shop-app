import { getAllProductsDB, getProductDBById} from '../services/product.service.js'
import type { Request, Response } from 'express'

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await getAllProductsDB()
    res.status(200).json({ status: 200, data: products })
  } catch (error) {
    console.error(error)
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    if (!req.params.productId) {
      throw new Error('NO_PRODUCT_ID')
    }
    const product = await getProductDBById(req.params.productId)
    res.status(200).json({ status: 200, data: product })
  } catch (error) {
    console.error(error)
  }
}