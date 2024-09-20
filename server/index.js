const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./db')
const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

// Middleware
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', "DELETE"],
    credentials: true
}))
app.use(express.json())

// Routes
app.use('/api/auth', userRoute)
app.use('/api/users', userRoute)

// Connect to db
connectDB(process.env.MONGO_URI)

// 4) GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
})

app.listen(port, () => console.log(`Server running on port ${port}!`))