// Configuration
import 'dotenv/config'

// Mongoose
import Mongo from '../Class/Database/MongoDB'
// import Mysql from '../Class/Mysql'

// ========================================================================================================

interface DatabaseConnection {
  connection: () => Promise<void>
}

class Database implements DatabaseConnection {
  async connection() {
    const database = new Mongo()
    await database.connection()
  }
}

export default Database
