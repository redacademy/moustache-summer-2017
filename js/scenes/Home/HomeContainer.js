import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { addNavigationHelpers } from 'react-navigation';
import Featured from '../../components/Featured/';
import CustomHeader from '../../components/Header/';

import { triggerStoreMenuItem } from '../../redux/modules/menuItems';
import { ActivityIndicator } from 'react-native';
import { favesQuery, getUserTimestamp } from '../../redux/modules/user';

class HomeContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            statusBarStyle: 'light-content',
            header: (
                <CustomHeader
                    title={'Home'}
                    buttons={['Menu', 'Featured']}
                    selectedTab={1}
                    navigation={navigation}
                />
            )
        }
    }

    addFaves = (list) => {
        if (!list) return []
        const faveList = this.props.faves
        const newList = list.map(item => ({ ...item, fave: !!faveList.find(it => it.id == item.id) }));
        return newList;
    }

    componentDidMount() {
        const { favesQuery, getUserTimestamp } = this.props;
        getUserTimestamp();
        favesQuery();
    }

    sendMenuItem = (item) => {
        const { triggerStoreMenuItem } = this.props
        triggerStoreMenuItem(item)
    }

    render() {

        const selected = this.props.selectedTab;
        const { data: { loading, featuredItems }, navigationState, dispatch } = this.props;
        const itemsWithFaves = this.addFaves(featuredItems)

        if (loading) return <ActivityIndicator />;
        return (
            <Featured
                featuredItems={itemsWithFaves}
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
                sendMenuItem={this.sendMenuItem}
            />
        )
    }
}

HomeContainer.propTypes = {
    selectedTab: PropTypes.number.isRequired,
    navigationState: PropTypes.shape({
        index: PropTypes.number,
        routes: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string,
            routeName: PropTypes.string,
        })),
    }).isRequired,
    dispatch: PropTypes.func,
    data: PropTypes.shape({
        loading: PropTypes.bool,
    }).isRequired,
    featuredItems: PropTypes.arrayOf(
        PropTypes.shape({
            __typename: PropTypes.string,
            category: PropTypes.string,
            name: PropTypes.string,
            ingredients: PropTypes.string,
            price: PropTypes.string,
            similarItems: PropTypes.string,
            healthBenefits: PropTypes.string
        })
    ),
    faves: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string
        })
    ),
    favesQuery: PropTypes.func.isRequired,
    getUserTimestamp: PropTypes.func.isRequired,
    triggerStoreMenuItem: PropTypes.func
}

const fetchFeaturedItems = gql`
    query fetchFeaturedItems {
        featuredItems {
            id
            imageLink
            category
            name
            featured
            ingredients
            price
            similarItems
            healthBenefits
        }
}
`
const featuredItems = graphql(fetchFeaturedItems)(HomeContainer);

const homeContainerState = connect((state) => ({
    navigationState: state.home,
    faves: state.user.faves
}), { favesQuery, triggerStoreMenuItem, getUserTimestamp })(featuredItems);

export default homeContainerState;
