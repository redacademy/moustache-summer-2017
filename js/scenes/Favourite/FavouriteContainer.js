import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { addNavigationHelpers } from 'react-navigation';
import Favourite from './Favourite';
import { storeMenuItem } from '../../redux/modules/menuItems';
import { colors } from '../../config/styles';

import { triggerStoreMenuItem } from '../../redux/modules/menuItems';
import { ActivityIndicator } from 'react-native';
import { favesQuery } from '../../redux/modules/user';

class FavouriteContainer extends Component {

    static navigationOptions = {
        title: 'Favourites',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.lightGreen },
    };

    componentDidMount() {
        const { favesQuery } = this.props
        favesQuery()
    }

    addFaves = (list) => {
        if (!list) return []
        const faveList = this.props.faves;
        const newList = list.map(item => ({ ...item, fave: !!faveList.find(it => it.id == item.id)}));
        return newList;
    }

    sendMenuItem = (item) => {
        const { triggerStoreMenuItem } = this.props;
        triggerStoreMenuItem(item);
    }

    render() {
        const { data: { loading, menuItems }, navigationState, dispatch } = this.props;
        const itemsWithFaves = this.addFaves(menuItems).filter(item => item.fave);
        
        if (loading) return <ActivityIndicator />;
        return (
            <Favourite
                favouriteItems={itemsWithFaves}
                sendMenuItem={this.sendMenuItem}
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
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
        navigationState: state.home,
        faves: state.user.faves
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
    faves: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string
        })
    ),
    dispatch: PropTypes.func,
    favesQuery: PropTypes.func.isRequired,
    navigationState: PropTypes.func,
    triggerStoreMenuItem: PropTypes.func,
}

const FavouriteItemsWithData = graphql(fetchMenuItems)(FavouriteContainer);
export default connect(mapStateToProps, { favesQuery, triggerStoreMenuItem } )(FavouriteItemsWithData);