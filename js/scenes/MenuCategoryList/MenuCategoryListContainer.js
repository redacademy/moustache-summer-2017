import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import MenuCategoryList from './MenuCategoryList';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../config/styles';

class MenuCategoryListContainer extends Component {

    static navigationOptions = {
        title: 'Menu Category',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.lightGreen },
    };

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        const { data: { loading, menuItems } } = this.props;

        if (loading) return <ActivityIndicator />;
        return (
            <MenuCategoryList
                menuItemsList={menuItems}
            />
        )
    }
}

MenuCategoryListContainer.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        menuItems: PropTypes.arrayOf(
            PropTypes.shape({
                __typename: PropTypes.string,
                category: PropTypes.string,
                name: PropTypes.string,
                ingredients: PropTypes.string,
                price: PropTypes.string,
                similarItems: PropTypes.string,
                healthBenefits: PropTypes.string
            })
        )
    })
}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE
    };
}

const fetchMenuItems = gql`
    query fetchMenuItems {
        menuItems {
            category
            name
            ingredients
            price
            similarItems
            healthBenefits
        }
    }
`

const menuItemsList = graphql(fetchMenuItems)(MenuCategoryListContainer);
export default connect(mapStateToProps)(menuItemsList);
