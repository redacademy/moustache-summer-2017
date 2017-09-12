import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import client from './config/apolloClient';
import store from './redux/store';
import { Tabs } from './navigation/routes';

export default class moustache extends Component {
    render() {
        return (
            <ApolloProvider client={client} store={store}>
                <Tabs />
            </ApolloProvider>
        );
    }
}
