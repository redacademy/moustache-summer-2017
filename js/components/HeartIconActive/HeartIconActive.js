
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import { styles } from './styles';

const HeartIconActive = () => (
    <Image
        style={styles.heart}
        source={require('../../assets/icons/other/favorite_active.png')}
    />
);

export default HeartIconActive;

