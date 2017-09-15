import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import MenuCategoryList from './MenuCategoryList';
import CustomHeader from '../../components/Header/';
import { storeMenuItem } from '../../redux/modules/menuItems';
import { ActivityIndicator } from 'react-native';

class MenuCategoryListContainer extends Component {

    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            header: (
                <CustomHeader
                    title={navigation.state.routeName}
                    buttons={['Menu', 'Featured']}
                    //tabChange={homeTab}
                />
            )
        }
    }

    filterMenuItems = (menuItems, category) => {
        return menuItems.filter(item => item.category === category);
    }

    sendMenuItem = (item) => {
        return this.props.dispatch(storeMenuItem(item));
    }

    render() {
        const { data: { loading, menuItems } } = this.props;
        const category = this.props.menuCategory;

        if (loading) return <ActivityIndicator />;
        return (
            <MenuCategoryList
                menuItemsList={this.filterMenuItems(menuItems, category)}
                sendMenuItem={this.sendMenuItem}
            />
        )
    }
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
            imageLink
        }
    }
`

function mapStateToProps(state) {
    return {
        menuCategory: state.menu.category
    };
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
    }).isRequired,
    menuCategory: PropTypes.string,
    dispatch: PropTypes.func.isRequired
}

const MenuCategoryWithData = graphql(fetchMenuItems)(MenuCategoryListContainer)
export default connect(mapStateToProps)(MenuCategoryWithData);