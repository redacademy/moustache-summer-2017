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

    render() {
        return <Product item={this.props.item}/>
    }
}

function mapStateToProps(state) {
    return {
        item: state.menu.menuItem
    }
}

ProductContainer.propTypes = {
    item: PropTypes.shape({
        __typename: PropTypes.string,
        category: PropTypes.string,
        name: PropTypes.string,
        ingredients: PropTypes.string,
        price: PropTypes.string,
        similarItems: PropTypes.string,
        healthBenefits: PropTypes.string
    })
}

export default connect(mapStateToProps)(ProductContainer)