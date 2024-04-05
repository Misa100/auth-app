require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./app/routes/route')

const app = express();
const port = 3000;


app.use(express.json())
app.use(cors())

app.use("/login_api", routes)
//to use the routes

app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`)
})

app.post('/api/login', (req, res) => {
  // Handle POST request here
  console.log(req.body); // Print the POST request body to console
  res.redirect('http://localhost:4200/dashboard/')
});