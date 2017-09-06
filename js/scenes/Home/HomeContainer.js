import React, { Component } from 'react';

import { colors } from '../../config/styles';
import Home from './Home';

class HomeContainer extends Component {
    static navigationOptions = {
        title: 'Home',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: colors.lightGreen},
    };

    render() {
        return (
            <Home />
        )
    }
}

export default HomeContainer;