import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Featured from '../../components/Featured/';
import Menu from '../Menu/';
import CustomHeader from '../../components/Header/';
import { homeTab } from '../../redux/modules/SegmentedComps';
import { ActivityIndicator } from 'react-native';

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
        const { data: { loading, menuItems } } = this.props;

        if (loading) return <ActivityIndicator />;
        if (selected === 1) {
            return (
                <Featured featuredItems={menuItems}/>
            )
        } else if (selected === 0) {
            return (
                <Menu />
            )
        }
    }
}

HomeContainer.propTypes = {
    selectedTab: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
    return {
        selectedTab: state.segment.tabChoice,
    }
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
export default connect(mapStateToProps)(featuredItems);