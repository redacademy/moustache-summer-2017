// Dependencies
const express = require('express')
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const schema = require('./api/schema');
const cors = require('cors');

// Dependencies - routes
const rest = require('./apirest/rest');

// App
const app = express()
app.use('*', cors());

// Routes
app.get('/', function (req, res) { res.status(400).send('invalid') });
app.use('/rest', rest);
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({  endpointURL: '/graphql' }));
 
// Run
app.listen(4400, function () {
    console.log('Server running on port 4400');
})