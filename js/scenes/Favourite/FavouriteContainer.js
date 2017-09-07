import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Favourite from './Favourite'

class FavouriteContainer extends Component {
    static route = {
        navigationBar: {
            title: 'Favourite',
        }
    }

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        return <Favourite />
    }
}

FavouriteContainer.propTypes = {}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE      
    }
}
  
export default connect(mapStateToProps)(FavouriteContainer)