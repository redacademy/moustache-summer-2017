import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Events from './Events'

class EventsContainer extends Component {
    static route = {
        navigationBar: {
            title: 'Events',
        }
    }

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        return <Events />
    }
}

EventsContainer.propTypes = {}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE        
    }
}
  
export default connect(mapStateToProps)(EventsContainer)