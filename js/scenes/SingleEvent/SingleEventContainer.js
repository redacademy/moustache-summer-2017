import React, { Component } from 'react';

import SingleEvent from './SingleEvent';
import { colors } from '../../config/styles';

class SingleEventContainer extends Component {

    static navigationOptions = {
        title: 'Learn',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.lightGreen },
    };

    render() {
        return (
            <SingleEvent />
        )
    }
}

export default SingleEventContainer;

