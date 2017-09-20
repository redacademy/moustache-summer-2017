import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import { storeCategory } from '../../redux/modules/menuItems';
import Menu from './Menu';
import CustomHeader from '../../components/Header/';    

class MenuContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <CustomHeader
                    title={'Home'}
                    buttons={['Menu', 'Featured']}
                    navigation={navigation}
                    selectedTab={0}
                />
            )
        }
    }

    sendCategory = (category) => {
        return this.props.dispatch(storeCategory(category));
    }

    render() {
        const { navigationState, dispatch } = this.props;

        return (
            <Menu
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
                sendCategory={this.sendCategory}
            />
        )
    }
}

MenuContainer.propTypes = {
    navigationState: PropTypes.shape({
        index: PropTypes.number,
        routes: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string,
            routeName: PropTypes.string,
        })),
    }),
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        category: state.menu.category
    }
}

export default connect(mapStateToProps)(MenuContainer)