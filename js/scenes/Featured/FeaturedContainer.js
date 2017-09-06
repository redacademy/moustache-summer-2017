import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Featured from './Featured'

class FeaturedContainer extends Component {
    static route = {
        navigationBar: {
             title: 'Featured',
        }
    }

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        return <Featured />
    }
}

FeaturedContainer.propTypes = {}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE      
    }
}
  
export default connect(mapStateToProps)(FeaturedContainer)