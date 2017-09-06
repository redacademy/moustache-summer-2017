import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import { styles } from './styles'

const HeartIconHollow = () => (
    <Image
        style={styles.heart}
        source={require('../../assets/icon/others/favorite_default.png')}
    />
);

export default HeartIconHollow;

