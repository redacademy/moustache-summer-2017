import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Menu from './Menu'

class MenuContainer extends Component {
    static route = {
        navigationBar: {
            title: 'Menu',
        }
    }

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        return <Menu />
    }
}

MenuContainer.propTypes = {}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE      
    }
}
  
export default connect(mapStateToProps)(MenuContainer)
