import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeartIcon from './HeartIcon';
import { faveToggle } from '../../redux/modules/user'
import { connect } from 'react-redux';

class HeartIconContainer extends Component {

    state = { isFaved: this.props.isFaved }

    handleFavePress = () => {
        this.props.dispatch(faveToggle(this.props.itemId))
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
    faveHeart: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
};

export default connect()(HeartIconContainer);