// Environement variables
import 'dotenv/config'

// Express
import express from 'express'

// Database
// import mongo from "../Models/mongo";

// Configuration
import cors from 'cors'
import helmet from 'helmet'

// Routes
// import PlanningRoutes from "../Routes/plannings";

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
// mongo();

// Routes
// app.use("/", PlanningRoutes);

// Listen to server
const port = process.env.PORT || 6000

app.listen(port, () => console.log(`Server is running on port ${port}`))
