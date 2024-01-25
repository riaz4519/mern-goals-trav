// server.js
import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import goalRoutes from './routes/goalRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js'

// config
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
