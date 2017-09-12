import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles'

const HeartIconHollow = () => (
    <Image
        style={styles.heart}
        source={require('../../assets/icons/others/favorite_default.png')}
    />
);

export default HeartIconHollow;

