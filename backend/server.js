import express from 'express'
import dotenv from 'dotenv'

// import routes
import goalRoutes from './routes/goalRoutes.js'

const port = process.env.PORT || 5000
dotenv.config()

const app = express()

app.use('/api/goals', goalRoutes)

app.listen(port, () => console.log(`Server starte on port ${port}`))
