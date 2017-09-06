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

// npm i react-native-swiper --save

// componentDidMount() {
    
//       AsyncStorage.getItem('onboarding').then((val) => {
    
//         if (!val) {
//           this.setState({ onboarding: 'pending' });
//           AsyncStorage.setItem('onboarding', 'done').done();
//         } else {
//           this.setState({ onboarding: val });
//         }
    
//       }).done();
    
//     }
    
//     render() {
    
//       switch (this.state.onboarding) {
//         case 'pending': return (<Onboarding />);
//         case 'done': return (<Home />);
//         default: return (<Loading />);
//       };
    
//     }