import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeartIcon from './HeartIcon';

class HeartIconContainer extends Component {

    state = { isFaved: this.props.isFaved }

    handleFavePress = () => {
        this.setState({isFaved: !this.state.isFaved })
    }

    render() {
        const { faveButton, faveHeart } = this.props;

        return (
            <HeartIcon
                itemId={this.props.itemId}
                isFaved={this.state.isFaved}
                handleFavePress={this.handleFavePress}
                faveButton={faveButton}
                faveHeart={faveHeart}
            />
        )
    }
}

HeartIconContainer.propTypes = {
    itemId: PropTypes.string.isRequired,
    isFaved: PropTypes.bool.isRequired,
    faveButton: PropTypes.object,
    faveHeart: PropTypes.object
};

export default HeartIconContainer;