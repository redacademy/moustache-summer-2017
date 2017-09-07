import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Product from './Product'

class ProductContainer extends Component {
    static route = {
        navigationBar: {
            title: 'Product_Cat_Name',
                //TODO: CONDITIONALLY RENDER TITLE BASE ON SELECTED CATEGORY
        }
    }

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