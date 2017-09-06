import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Favourite from './Favourite'
import { colors } from '../../config/styles';

class FavouriteContainer extends Component {
    static navigationOptions = {
        title: 'Favourites',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.lightGreen },
    };

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

export default connect(mapStateToProps)(FavouriteContainer);