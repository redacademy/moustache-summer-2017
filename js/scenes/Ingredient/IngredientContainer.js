import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';
import CustomHeader from '../../components/Header/';
import { colors } from '../../config/styles';

class IngredientContainer extends Component {
    
    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            header: (
                <CustomHeader
                    title={'Learn'}
                    buttons={['Events', 'Ingredients', 'Growers']}
                    backButton={true}
                    navigation={navigation}
                />
            )
        }
    }

    render() {
        return (
            <Ingredient />
        )
    }
}

IngredientContainer.propTypes = {

}

export default IngredientContainer;
