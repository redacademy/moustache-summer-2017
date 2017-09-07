import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';

import store from './redux/store';
import { Tabs } from './navigation/routes';

export default class moustache extends Component {
    render() {
        return (
            <Provider store={store}>
                <Tabs />
            </Provider>
        );
    }
}
