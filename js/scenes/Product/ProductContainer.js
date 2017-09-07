import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Product from './Product';
import { colors } from '../../config/styles';

class ProductContainer extends Component {
    static navigationOptions = {
        title: 'Menu Category',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.lightGreen },
    };

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        return <Product />
    }
}

ProductContainer.propTypes = {}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE    
    }
}

export default connect(mapStateToProps)(ProductContainer)
