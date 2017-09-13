const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');

const schema = require('./api/schema');
const cors = require('cors');

const GQL_PORT = 4400;

// Dependencies - routes
const rest = require('./apirest/rest');

// App
const app = express();

app.use('*', cors());

// Routes
app.get('/', function (req, res) { res.status(404).send() });
app.use('/rest', rest);

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ 
    endpointURL: '/graphql' // set up graphql endpoint
}));

// Run
app.listen(GQL_PORT, () => console.log(
    `GraphQL is now running localhost:${GQL_PORT}`
));
