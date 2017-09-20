import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator } from 'react-native';
import HealthBenefit from './HealthBenefit';
import CustomHeader from '../../components/Header/';

class HealthBenefitContainer extends Component {
    static navigationOptions = ({ navigation }) => {
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
    convert = (list) => {
        if (!list) return [];
        let newList = [];
        list.forEach(item => {
            const key = item.name.trim().substring(0, 1);
            if (!newList[key]) {
                console.log('new', item)
                newList[key] = [item];
            } else {
                console.log('add', item)
                newList[key].push(item);
            }
        })
        console.log('newList', newList)
        return newList;
    }

    render() {
        const { data: { loading, healthBenefits } } = this.props;
        const alphaList = this.convert(healthBenefits)
        if (loading) return <ActivityIndicator />;
        return (
            <HealthBenefit
                benefitsList={this.props.data.healthBenefits}
                dispatch={this.props.dispatch}
            />
        )
    }
}

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