import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';
import { colors } from '../../config/styles';

const IngredientContainer = ({ navigation }) => {
    return (
        <Ingredient data={navigation.state.params.healthBenefit} />
    );
}

IngredientContainer.navigationOptions = {
    title: 'Learn',
    headerTintColor: 'white',
    headerStyle: { backgroundColor: colors.lightGreen }
};

IngredientContainer.propTypes = {
    navigation: PropTypes.shape({
        healthBenefit: PropTypes.shape({
            __typename: PropTypes.string,
            details: PropTypes.string,
            healthBenefits: PropTypes.string,
            name: PropTypes.string,
            whereInMenu: PropTypes.string,
            id: PropTypes.string,
            imageLink: PropTypes.string,
        })
    })
}

export default IngredientContainer;
