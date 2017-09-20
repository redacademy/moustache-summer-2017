import React, { Component } from 'react';

import SingleEvent from './SingleEvent';
import { colors } from '../../config/styles';
import CustomHeader from '../../components/Header/';

class SingleEventContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <CustomHeader
                    title={'Learn'}
                    buttons={['Events', 'Ingredients', 'Growers']}
                    selectedTab={1}
                    navigation={navigation}
                    backButton={true}
                />
            )
        }
    };

    render() {
        return (
            <SingleEvent />
        )
    }
}

export default SingleEventContainer;

