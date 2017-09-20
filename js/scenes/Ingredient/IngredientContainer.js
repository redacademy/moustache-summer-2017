import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
            <Ingredient data={this.props.healthBenefit} />
        )
    }
}

function mapStateToProps(state) {
    return {
        healthBenefit: state.healthBenefit.healthBenefit
    };
}

IngredientContainer.propTypes = {
    healthBenefit: PropTypes.shape({
        __typename: PropTypes.string,
        details: PropTypes.string,
        healthBenefits: PropTypes.string,
        name: PropTypes.string,
        whereInMenu: PropTypes.string,
        id: PropTypes.string,
        imageLink: PropTypes.string,
    })
}

export default connect(mapStateToProps)(IngredientContainer);