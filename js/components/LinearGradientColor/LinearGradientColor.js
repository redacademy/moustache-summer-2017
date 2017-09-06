import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

const LinearGradientColor = () => (
    <LinearGradient
        start={{ x: 0.4, y: 0 }}
        end={{ x: 0.5, y: 0 }}
        colors={['white', '#ADA49E']}
        style={styles.linearGradient}
    />
);

export default LinearGradientColor;