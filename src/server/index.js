const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
dotenv.config()
const PORT = 8081

app.use(cors())

app.use(express.json())
app.use(express.static((root: 'dist')))
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
app.post('/add-url', async (req, res) => {
    const url = req.body.url
    try {
        const response = await fetch(`${BASE_API_URL}?key=${process.env.API_KEY}&url=${url}&lang=en`)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = app
