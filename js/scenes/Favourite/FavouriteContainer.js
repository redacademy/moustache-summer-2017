import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator } from 'react-native';
import Favourite from './Favourite';
import { storeMenuItem } from '../../redux/modules/menuItems';
import { colors } from '../../config/styles';

class FavouriteContainer extends Component {
    static navigationOptions = {
        title: 'Favourites',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.lightGreen },
    };

    sendMenuItem = (item) => {
        return this.props.dispatch(storeMenuItem(item));
    }

    render() {
        const { data: { loading, menuItems } } = this.props;

        if (loading) return <ActivityIndicator />;
        return (
            <Favourite
                favouriteItems={menuItems}
                sendMenuItem={this.sendMenuItem}
            />
        )
    }
}

const fetchMenuItems = gql`
    query fetchMenuItems {
        menuItems {
            id
            category
            name
            ingredients
            price
            similarItems
            healthBenefits
            imageLink
        }
    }
`

function mapStateToProps(state) {
    return {
        //TO ADD: faves: state.faves.faves
    }
}

FavouriteContainer.propTypes = {
    data: PropTypes.shape({
        favouriteItems: PropTypes.arrayOf(
            PropTypes.shape({
                __typename: PropTypes.string,
                category: PropTypes.string,
                name: PropTypes.string,
                ingredients: PropTypes.string,
                price: PropTypes.string,
                similarItems: PropTypes.string,
                healthBenefits: PropTypes.string,
                imageLink: PropTypes.string
            }).isRequired
        ),
    }),
    dispatch: PropTypes.func.isRequired
}

const FavouriteItemsWithData = graphql(fetchMenuItems)(FavouriteContainer);
export default connect(mapStateToProps)(FavouriteItemsWithData);