require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const routes = require('./app/routes/route')

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/login_api", routes)
//to use the routes

app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`)
})