import React, { Component } from 'react';

import { colors } from '../../config/styles';

import Learn from './Learn';

class LearnContainer extends Component {
    static navigationOptions = {
        title: 'Learn',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: colors.lightGreen},
    };

    render() {
        return (
            <Learn />
        )
    }
}

export default LearnContainer;