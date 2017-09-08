import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Onboarding from './Onboarding'

class OnboardingContainer extends Component {
    static route = {
        navigationBar: {
            title: 'Onboarding',
        }
    }

    getStarted = (index) => {
        Alert.alert('Next');
        console.log(index);
    }

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        return <Onboarding getStarted={this.getStarted}/>
    }
}

OnboardingContainer.propTypes = {}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE    
    }
  }
  
export default connect(mapStateToProps)(OnboardingContainer)
