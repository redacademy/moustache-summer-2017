import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Growers from './Growers'

class GrowersContainer extends Component {
    static route = {
        navigationBar: {
            title: 'Growers',
        }
    }

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        return <Growers />
    }
}

GrowersContainer.propTypes = {}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE        
    }
}
  
export default connect(mapStateToProps)(GrowersContainer)