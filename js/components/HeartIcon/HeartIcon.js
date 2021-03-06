
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import defaultImage from '../../assets/icons/other/favorite_default.png';
import activeImage from '../../assets/icons/other/favorite_active.png';
import { styles } from './styles';

const HeartIcon = ({ itemId, isFaved, handleFavePress, faveButton, faveHeart }) => {
    const image = isFaved ? activeImage : defaultImage
    return (
        <TouchableOpacity style={[styles.button, faveButton]} onPress={() => handleFavePress(itemId)}>
            <Image
                style={[styles.heart, faveHeart]}
                source={image}
            />
        </TouchableOpacity>
    );
};

HeartIcon.propTypes = {
    itemId: PropTypes.string.isRequired,
    isFaved: PropTypes.bool.isRequired,
    handleFavePress: PropTypes.func.isRequired,
    faveButton: PropTypes.object,
    faveHeart: PropTypes.object
};

export default HeartIcon;
