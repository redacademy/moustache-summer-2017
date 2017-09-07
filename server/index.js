import admin from './database/firebase';
import bodyParser from 'body-parser';
import {
    graphqlExpress,
    graphiqlExpress
} from 'graphql-server-express';

const GQL_PORT = 4400;

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', graphiqlExpress({ 
    endpointURL: '/graphql' // set up graphql endpoint
}));

app.listen(GQL_PORT, () => console.log(
    `GraphQL is now running localhost:${GQL_PORT}/graphql`
));