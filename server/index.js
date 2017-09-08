const express = require('express')
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
<<<<<<< HEAD
const schema = require('./api/schema');
const cors = require('cors');
=======
const admin = require('./database/firebase');
const schema = require('./api/schema');

const GQL_PORT = 4400;
>>>>>>> fix merge conflicts in index

// Dependencies - routes
const rest = require('./apirest/rest');

// App
const app = express()
app.use('*', cors());

app.use('*', cors());

// Routes
app.get('/', function (req, res) { res.status(404).send() });
app.use('/rest', rest);
<<<<<<< HEAD
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({  endpointURL: '/graphql' }));
 
// Run
app.listen(4400, function () {
    console.log('Server running on port 4400');
})
=======

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ 
    endpointURL: '/graphql' // set up graphql endpoint
}));

// Run
app.listen(4400, function () {
    console.log('Server running on port 4400')
})

app.listen(GQL_PORT, () => console.log(
    `GraphQL is now running localhost:${GQL_PORT}/graphql`
));
>>>>>>> fix merge conflicts in index
