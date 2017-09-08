// Dependencies
const express = require('express')

// Dependencies - routes
const rest = require('./apirest/rest')

// App
const app = express()

// Routes
app.get('/', function (req, res) { res.status(400).send('invalid') })
app.use('/rest', rest);
 
// Run
app.listen(4400, function () {
    console.log('Server running on port 4400')
})