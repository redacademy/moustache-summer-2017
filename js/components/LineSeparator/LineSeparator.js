import React from 'react';

import { View } from 'react-native';
import { styles } from './styles';

const LineSeparator = ({ additionalStyles }) => (
    <View style={[styles.border, additionalStyles]}></View>
);

export default LineSeparator;