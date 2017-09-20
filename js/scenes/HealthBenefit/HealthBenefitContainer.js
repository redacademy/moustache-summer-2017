import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator } from 'react-native';
import HealthBenefit from './HealthBenefit';
import CustomHeader from '../../components/Header/';

const HealthBenefitContainer = ({ data: { loading, healthBenefits }, dispatch }) => (
    (loading)
        ? <ActivityIndicator />
        : <HealthBenefit
            benefitsList={healthBenefits}
            dispatch={dispatch}
        />
);

HealthBenefitContainer.navigationOptions = ({ navigation }) => {
    return {
        header: (
            <CustomHeader
                title={'Learn'}
                buttons={['Events', 'Ingredients', 'Growers']}
                selectedTab={1}
                navigation={navigation}
            />
        )
    }
};

HealthBenefitContainer.propTypes = {
    dispatch: PropTypes.func,
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        healthBenefits: PropTypes.arrayOf(
            PropTypes.shape({
                __typename: PropTypes.string,
                details: PropTypes.string,
                healthBenefits: PropTypes.string,
                name: PropTypes.string,
                whereInMenu: PropTypes.string,
                id: PropTypes.string,
                imageLink: PropTypes.string,
            })
        )
    })
};

const fetchHealthBenefits = gql`
    query fetchHealthBenefits {
        healthBenefits {
            id
            name
            details
            healthBenefits
            whereInMenu
            imageLink
        }
    }
`

const healthBenefitsList = graphql(fetchHealthBenefits)(HealthBenefitContainer);
export default connect()(healthBenefitsList);