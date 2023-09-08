import mongoose from 'mongoose'

// ========================================================================================================

class Mysql {
  async connection() {
    try {
      await mongoose.connect(process.env.MONGO_ATLAS!)
      console.log('Connected to the database')
    } catch (error) {
      console.error(error.message)
      console.log("Couldn't connect to database")
    }
  }
}

export default Mysql
