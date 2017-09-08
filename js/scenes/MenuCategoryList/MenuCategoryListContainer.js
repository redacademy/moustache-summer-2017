import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { colors } from '../../config/styles';
import MenuCategoryList from './MenuCategoryList';

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
        return <MenuCategoryList />
    }
}

MenuCategoryListContainer.propTypes = {}


function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE      
    };
}

export default connect(mapStateToProps)(MenuCategoryListContainer)
