const express = require('express')
const app = express()
const port = 5000
const path = require('path')

app.use(express.static(path.join(__dirname, 'build')))

app.get('/api', (req, res) => {
  res.json({ messge: 'This is the api endpoint' })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, (req, res) => {
  console.log(`Server is listening on http://localhost:${port}`)
})