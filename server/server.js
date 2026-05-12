const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use((err , req , res , next) => {
    res.status(500).json({ error: err.message });
})

app.listen(5000 , () => {
    console.log("server running")
}) 