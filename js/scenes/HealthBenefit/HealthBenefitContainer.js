import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import HealthBenefit from './HealthBenefit';
import { ActivityIndicator } from 'react-native';

class HealthBenefitContainer extends Component {

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        const { data: { loading, healthBenefits } } = this.props;

        if (loading) return <ActivityIndicator />;
        return (
            <HealthBenefit
                benefitsList={healthBenefits}
            />
        )
    }
}

HealthBenefitContainer.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        healthBenefits: PropTypes.arrayOf(
            PropTypes.shape({
                __typename: PropTypes.string,
                details: PropTypes.string,
                healthBenefits: PropTypes.string,
                name: PropTypes.string,
                whereInMenu: PropTypes.string
            })
        )
    }) 
}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE
    }
}

const fetchHealthBenefits = gql`
    query fetchHealthBenefits {
        healthBenefits {
            name
            details
            healthBenefits
            whereInMenu
        }
    }
`

const healthBenefitsList = graphql(fetchHealthBenefits)(HealthBenefitContainer);
export default connect(mapStateToProps)(healthBenefitsList);