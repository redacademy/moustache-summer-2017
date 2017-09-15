import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { Tabs } from './routes';

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabBar,
    }
}

class TabBarNavigation extends Component {
    render() {
        const { dispatch, navigationState } = this.props
        return (
            <Tabs
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState,
                    })
                }
            />
        )
    }
}

TabBarNavigation.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigationState: PropTypes.shape({
        index: PropTypes.number
    })
}

export default connect(mapStateToProps)(TabBarNavigation);