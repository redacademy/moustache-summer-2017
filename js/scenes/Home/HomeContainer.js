import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Featured from '../../components/Featured/';
import Menu from '../Menu/';
import CustomHeader from '../../components/Header/';
import { homeTab } from '../../redux/modules/SegmentedComps';

class HomeContainer extends Component {

    static navigationOptions = () => {
        return {
            header: (
                <CustomHeader
                    title={'Home'}
                    buttons={['Menu', 'Featured']}
                    tabChange={homeTab}
                />
            )
        }
    }

    render() {
        const selected = this.props.selectedTab;
        if (selected === 1) {
            return (
                <Featured />
            )
        } else if (selected === 0) {
            return (
                <Menu />
            )
        }
    }
}

HomeContainer.propTypes = {
    selectedTab: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
    return {
        selectedTab: state.segment.tabChoice,
    }
}

export default connect(mapStateToProps)(HomeContainer);