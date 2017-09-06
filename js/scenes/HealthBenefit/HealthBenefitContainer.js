import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import HealthBenefit from './HealthBenefit'

class HealthBenefitContainer extends Component {
    static route = {
        navigationBar: {
            title: 'HealthBenefit',
        }
    }

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        return <HealthBenefit />
    }
}

HealthBenefitContainer.propTypes = {}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE        
    }
}

export default connect(mapStateToProps)(HealthBenefitContainer)