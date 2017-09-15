import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { addNavigationHelpers } from 'react-navigation';
import { ActivityIndicator } from 'react-native';

import Featured from '../../components/Featured/';
import Menu from '../Menu/';
import CustomHeader from '../../components/Header/';
import { homeTab } from '../../redux/modules/SegmentedComps';

class HomeContainer extends Component {

    static navigationOptions = () => {
        return {
            header: (
                <CustomHeader
                    title={'Home'}
                    buttons={['Menu', 'Featured']}
                    tabChange={homeTab}
                />
            )
        }
    }

    render() {
        const selected = this.props.selectedTab;
        const { data: { loading, menuItems }, navigationState, dispatch } = this.props;

        if (loading) return <ActivityIndicator />;
        if (selected === 1) {
            return (
                <Featured
                    featuredItems={menuItems}
                    navigation={
                        addNavigationHelpers({
                            dispatch: dispatch,
                            state: navigationState
                        })
                    }
                />

            )
        } else if (selected === 0) {
            return (
                <Menu 
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
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.shape({
        loading: PropTypes.bool,
    }).isRequired,
}

const fetchFeaturedItems = gql`
    query fetchFeaturedItems {
        featuredItems {
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
    selectedTab: state.segment.tabChoice,
    navigationState: state.home
}))(featuredItems);

export default homeContainerState;