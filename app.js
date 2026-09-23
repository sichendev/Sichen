const express = require('express') // Import Express
const app = express() // Web application

const port = 3000 // Port number

// Display the About page on the main route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})

// Start the web server on the port initialized above
app.listen(port, () => {
  // Display the server's address in the console
  console.log(`The server is running on http://localhost:${port}`)
})