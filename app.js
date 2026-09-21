const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, fWorld!', "application/json")
})

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})