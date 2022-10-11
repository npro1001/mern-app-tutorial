// Entry point to server

const express = require('express')
const dotenv = require('dotenv').config() // allows us to have .env file with variables
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5001


const app = express()

// To send post data via url or body
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

