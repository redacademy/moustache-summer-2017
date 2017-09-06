import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CustomHeader from '../../components/Header/';
import { learnTab } from '../../redux/modules/SegmentedComps';
import Events from '../Events/';
import HealthBenefits from '../HealthBenefit/';
import Growers from '../Growers/';

class LearnContainer extends Component {
    static navigationOptions = () => {
        return {
            header: (
                <CustomHeader
                    title={'Learn'}
                    buttons={['Events', 'Health Benefits', 'Growers']}
                    tabChange={learnTab}
                />
            )
        }
    };

    render() {
        const selected = this.props.selectedTab;
        if (selected === 0) {
            return (
                <Events />
            )
        } else if (selected === 1) {
            return (
                <HealthBenefits />
            )
        } else if (selected === 2) {
            return (
                <Growers />
            )
        }
    }
}

LearnContainer.propTypes = {
    selectedTab: PropTypes.number.isRequired,
}

function mapSateToProps(state) {
    return {
        selectedTab: state.segment.learnChoice
    }
}

export default connect(mapSateToProps)(LearnContainer);
