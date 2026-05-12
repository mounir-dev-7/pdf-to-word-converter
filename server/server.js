const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const conversionRoutes = require('./routes/conversionRoutes.js')

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api', conversionRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).json({ 
        error: err.message || 'Internal Server Error'
    })
})

app.listen(port , () => {
    console.log(`Server running on port ${port}`)
}) 