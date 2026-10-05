const express = require('express') // Imports Express
const expressLayouts = require('express-ejs-layouts') // Imports EJS Layouts

const app = express() // Web application

app.use(expressLayouts) // Wraps pages in the layout via res.render
app.use(express.static('public')) // Serves static files from the public folder

app.set('view engine', 'ejs') // Engine for converting from ejs to html
app.set('layout', 'layouts/layout') // Default layout file

const port = 3000 // Port number

// Displays the About page on the main route
app.get('/', (req, res) => {
  res.render('pages/about', { title: 'About' })
})

// Starts the web server on the port initialized above
app.listen(port, () => {
  // Displays the server's address in the console
  console.log(`The server is running on http://localhost:${port}`)
})