import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';
import { colors } from '../../config/styles';

class IngredientContainer extends Component {
    static navigationOptions = {
        title: 'Learn',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.lightGreen },
    };

    render() {
        return (
            <Ingredient />
        )
    }
}

IngredientContainer.propTypes = {

}

export default IngredientContainer;
