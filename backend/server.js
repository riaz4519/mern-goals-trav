// server.js
import path from 'path'
import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import goalRoutes from './routes/goalRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js'


import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


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

// Serve frontend

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  })
} else {
  app.get('/', (req, res) => {
    res.send('Please set to production')
  })
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
