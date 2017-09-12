import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4400/graphql'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

// networkInterface.use([{
//   applyBatchMiddleware(req, next) {
//       if (!req.options.headers) {
//           req.options.headers = {}; // Create header object if needed
//       }
//     }
// }]);

export default client;