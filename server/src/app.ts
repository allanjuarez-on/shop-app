import 'dotenv/config'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import dbConnect from './config/db.config.js'
import ProductModel from './models/product.model.js'
import { corsOptions } from './config/cors-options.config.js'
import { limiter } from './config/rate-limit.config.js'
import { router } from './routes/index.js'
import { fillDataBase } from './services/product.service.js'
import { SERVER_PORT } from './constants/global.js'

const application = express()
const environment = process.env.NODE_ENV || 'development'

dotenv.config({
  path: environment === 'production' ? '.env.production' : '.env',
})

application.use(limiter)
application.use(cors(corsOptions))
application.use(express.json())
application.use('/api', router)

dbConnect().then(() => {
  console.log('CONEXION A EXITOSA A LA BASE DE DATOS.')
  ProductModel.exists({})
    .then((exists) => {
      if (!exists) {
        fillDataBase()
      }
    })
    .catch((error) => console.error(error))
})

application.listen(SERVER_PORT, () => {
  console.log(
    `SERVIDOR VINCULADO AL PUERTO ${SERVER_PORT} | TIPO DE ENTORNO: ${process.env.NODE_ENV}`
  )
})