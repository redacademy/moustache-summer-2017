import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator } from 'react-native';

import MenuCategoryList from './MenuCategoryList';
import CustomHeader from '../../components/Header/';
import { triggerStoreMenuItem } from '../../redux/modules/menuItems';
import { favesQuery } from '../../redux/modules/user';

class MenuCategoryListContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <CustomHeader
                    title={navigation.state.params}
                    buttons={['Menu', 'Featured']}
                    backButton={true}
                    navigation={navigation}
                    selectedTab={0}
                />
            )
        }
    }

    componentDidMount = () => {
        const { favesQuery } = this.props;
        favesQuery();
    }

    addFaves = (list) => {
        if (!list) return [];
        const faveList = this.props.faves;
        const newList = list.map(item => ({ ...item, fave: !!faveList.find(it => it.id == item.id)}));
        return newList;
    }

    filterMenuItems = (menuItems, category) => {
        return menuItems.filter(item => item.category === category);
    }

    sendMenuItem = (item) => {
        const { triggerStoreMenuItem } = this.props;
        triggerStoreMenuItem(item);
    }

    render() {
        const { data: { loading, menuItems } } = this.props;
        const category = this.props.menuCategory;
        const itemsWithFaves = this.addFaves(menuItems);

        if (loading) return <ActivityIndicator />;
        return (
            <MenuCategoryList
                menuItemsList={this.filterMenuItems(itemsWithFaves, category)}
                sendMenuItem={this.sendMenuItem}
            />
        );
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
        menuCategory: state.menu.category,
        faves: state.user.faves
    };
}

MenuCategoryListContainer.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        menuItems: PropTypes.arrayOf(
            PropTypes.shape({
                __typename: PropTypes.string,
                id: PropTypes.string,
                category: PropTypes.string,
                name: PropTypes.string,
                ingredients: PropTypes.string,
                price: PropTypes.string,
                similarItems: PropTypes.string,
                healthBenefits: PropTypes.string
            })
        )
    }).isRequired,
    faves: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string
        })
    ),
    menuCategory: PropTypes.string,
    dispatch: PropTypes.func,
    favesQuery: PropTypes.func.isRequired,
    triggerStoreMenuItem: PropTypes.func.isRequired
}

const MenuCategoryWithData = graphql(fetchMenuItems)(MenuCategoryListContainer)
export default connect(mapStateToProps, { favesQuery, triggerStoreMenuItem })(MenuCategoryWithData);
