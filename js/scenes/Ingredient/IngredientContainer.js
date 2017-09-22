import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';
import CustomHeader from '../../components/Header/';
import { colors } from '../../config/styles';

const IngredientContainer = ({ navigation }) => {
    return (
        <Ingredient data={navigation.state.params.healthBenefit} />
    );
}

IngredientContainer.navigationOptions = ({ navigation }) => {
    return {
        header: (
            <CustomHeader
                title={'Learn'}
                buttons={['Events', 'Ingredients', 'Growers']}
                selectedTab={0}
                navigation={navigation}
                backButton={true}
            />
        )
    }
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
