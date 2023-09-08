import mongoose from 'mongoose'

// ========================================================================================================

class MongoDB {
  async connection() {
    let uri

    if (process.env.NODE_ENV2 === 'production') {
      uri = process.env.MONGO_PRODUCTION
    }

    try {
      await mongoose.connect(uri || process.env.MONGO_ATLAS!)
      console.log('Connected to database')
    } catch (error) {
      console.error(error.message)
      console.log("Couldn't connect to database")
    }
  }
}

export default MongoDB
