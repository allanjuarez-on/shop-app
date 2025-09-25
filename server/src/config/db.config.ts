import 'dotenv/config'
import mongoose, { connect } from 'mongoose'

async function dbConnect(): Promise<void> {
  try {
    mongoose.set('strictQuery', false)
    const URI = process.env.URI

    if (!URI) {
      throw Error('No existe la llave de acceso (URI)')
    }

    await connect(URI)
  } catch (error) {
    console.error(error)
  }
}

export default dbConnect