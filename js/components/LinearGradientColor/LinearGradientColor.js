import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../config/styles';

import { styles } from './styles';

const LinearGradientColor = () => (
    <LinearGradient
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 0 }}
        colors={[colors.white, 'rgba(255,255,255,0.5)']}
        style={styles.linearGradient}
    />
);

export default LinearGradientColor;