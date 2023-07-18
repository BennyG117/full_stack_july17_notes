//THIS ABOVE MONGOOSE CONFIG BELOW*
require('dotenv').config()

const express = require('express')
const app = express()
const port = 8080

//? const port = process.env.port


//May want to include your port into the .env file in the future*
const cors = require('cors')


//Added for integrating mongoose
require('./config/mongoose.config')


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//Add cors below and add const cors above in server.js
app.use(cors())

//TODO: CHANGE NAME OF ROUTE
//!import routes function: (attaches all our routes to our app)
const routeAttacher = require('./routes/movie.routes')


routeAttacher(app)

// app.listen( port, () => console.log(`<<Server Online>> ${port}`) );
// app.listen( port, () => console.log(process.env.MY_VARIABLE));
//Updated below for mongoose lecture:
app.listen( port, () => console.log(`Server Live on Port: ${port}`));
