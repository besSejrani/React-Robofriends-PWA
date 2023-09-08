// Environement variables
import 'dotenv/config'

// Express
import express from 'express'

// Database
import Database from '../Models/database'

// Configuration
import cors from 'cors'
import helmet from 'helmet'

// Routes
import AuthRoutes from '../Routes/auth'

// ========================================================================================================

const app = express()

// CORS Configuration
const corsOptions = {
  origin: process.env.CORS_DOMAIN,
  credentials: true
}

// Middlewares
app.use(helmet())
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Services
const database = new Database()
database.connection()

// Routes
app.use('/', AuthRoutes)

// Listen to server
const port = process.env.PORT || 6000

app.listen(port, () => console.log(`Server is running on port ${port}`))
