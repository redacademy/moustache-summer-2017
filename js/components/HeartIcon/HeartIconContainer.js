import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeartIcon from './HeartIcon';

class HeartIconContainer extends Component {

    state = { isFaved: this.props.isFaved }

    handleFavePress = () => {
        this.setState({isFaved: !this.state.isFaved })
    }

    render() {
        return <HeartIcon
            itemId={this.props.itemId}
            isFaved={this.state.isFaved}
            handleFavePress={this.handleFavePress}
        />
    }
}

HeartIconContainer.propTypes = {
    itemId: PropTypes.string.isRequired,
    isFaved: PropTypes.bool.isRequired
};

export default HeartIconContainer;