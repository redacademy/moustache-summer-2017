import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MenuCategoryList from './MenuCategoryList'

class MenuCategoryListContainer extends Component {
    static route = {
        navigationBar: {
          title: 'MenuCategoryList',
            // TODO: CONDITIONALLY RENDER TITLE BASE ON SELECTED CATEGORY
        }
    }

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